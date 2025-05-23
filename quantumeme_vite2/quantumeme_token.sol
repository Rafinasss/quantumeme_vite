// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/**
 * @title QUANTUMEME Token
 * @dev Implementação do token QUANTUMEME ($QTMM) com mecanismos de staking quântico
 * e funcionalidades de queima programada.
 */
contract QuantumemeToken is ERC20, ERC20Burnable, Ownable {
    using SafeMath for uint256;

    // Eventos
    event QuantumStake(address indexed staker, uint256 amount, uint256 duration);
    event QuantumUnstake(address indexed staker, uint256 amount, uint256 reward);
    event QuantumCollapse(address indexed recipient, uint256 amount);
    event QuantumBurn(uint256 amount, string reason);

    // Constantes
    uint256 public constant MAX_SUPPLY = 42_000_000_000 * 10**18; // 42 bilhões de tokens
    uint256 public constant MIN_STAKE_DURATION = 7 days;
    uint256 public constant MAX_STAKE_DURATION = 365 days;
    uint256 public constant MIN_APY = 42; // 42% APY mínimo
    uint256 public constant MAX_APY = 137; // 137% APY máximo
    
    // Variáveis de estado
    uint256 public communityRewardsAllocation;
    uint256 public marketingAllocation;
    uint256 public teamAllocation;
    uint256 public stakingRewardsAllocation;
    uint256 public burnedAmount;
    uint256 public lastQuantumCollapseTime;
    uint256 public quantumCollapseInterval;
    
    // Estrutura para armazenar informações de staking
    struct QuantumStakeInfo {
        uint256 amount;
        uint256 startTime;
        uint256 endTime;
        uint256 superpositionFactor; // Fator aleatório para determinar recompensas
        bool collapsed; // Se o staking já foi "colapsado" (finalizado)
    }
    
    // Mapeamento de endereços para informações de staking
    mapping(address => QuantumStakeInfo[]) public quantumStakes;
    
    // Mapeamento para rastrear observadores quânticos (embaixadores)
    mapping(address => bool) public quantumObservers;
    
    /**
     * @dev Construtor que define o nome e símbolo do token e distribui o suprimento inicial
     * @param initialOwner Endereço do proprietário inicial do contrato
     */
    constructor(address initialOwner) ERC20("QUANTUMEME", "QTMM") Ownable(initialOwner) {
        // Distribuição inicial do token
        uint256 initialSupply = MAX_SUPPLY;
        
        // 25% para recompensas da comunidade
        communityRewardsAllocation = initialSupply.mul(25).div(100);
        _mint(address(this), communityRewardsAllocation);
        
        // 30% para desenvolvimento e operações
        teamAllocation = initialSupply.mul(30).div(100);
        _mint(initialOwner, teamAllocation);
        
        // 20% para marketing e parcerias
        marketingAllocation = initialSupply.mul(20).div(100);
        _mint(address(this), marketingAllocation);
        
        // 15% para pool de staking
        stakingRewardsAllocation = initialSupply.mul(15).div(100);
        _mint(address(this), stakingRewardsAllocation);
        
        // 10% para liquidez inicial
        uint256 liquidityAllocation = initialSupply.mul(10).div(100);
        _mint(initialOwner, liquidityAllocation);
        
        // Configurar intervalo de colapso quântico (eventos aleatórios de recompensa)
        lastQuantumCollapseTime = block.timestamp;
        quantumCollapseInterval = 30 days;
    }
    
    /**
     * @dev Permite que usuários façam staking de seus tokens
     * @param amount Quantidade de tokens para fazer staking
     * @param duration Duração do staking em segundos
     */
    function quantumStake(uint256 amount, uint256 duration) external {
        require(amount > 0, "Quantidade deve ser maior que zero");
        require(duration >= MIN_STAKE_DURATION, "Duracao muito curta");
        require(duration <= MAX_STAKE_DURATION, "Duracao muito longa");
        require(balanceOf(msg.sender) >= amount, "Saldo insuficiente");
        
        // Transferir tokens do usuário para o contrato
        _transfer(msg.sender, address(this), amount);
        
        // Gerar fator de superposição (número aleatório entre 0-100)
        // Em produção, usar um oráculo como Chainlink VRF para verdadeira aleatoriedade
        uint256 superpositionFactor = uint256(keccak256(abi.encodePacked(
            block.timestamp, 
            msg.sender, 
            blockhash(block.number - 1)
        ))) % 100;
        
        // Criar novo registro de staking
        quantumStakes[msg.sender].push(QuantumStakeInfo({
            amount: amount,
            startTime: block.timestamp,
            endTime: block.timestamp + duration,
            superpositionFactor: superpositionFactor,
            collapsed: false
        }));
        
        emit QuantumStake(msg.sender, amount, duration);
    }
    
    /**
     * @dev Permite que usuários retirem tokens em staking após o período de bloqueio
     * @param stakeIndex Índice do stake a ser retirado
     */
    function quantumUnstake(uint256 stakeIndex) external {
        require(stakeIndex < quantumStakes[msg.sender].length, "Stake nao encontrado");
        
        QuantumStakeInfo storage stakeInfo = quantumStakes[msg.sender][stakeIndex];
        
        require(!stakeInfo.collapsed, "Stake ja foi colapsado");
        require(block.timestamp >= stakeInfo.endTime, "Periodo de staking nao concluido");
        
        uint256 stakedAmount = stakeInfo.amount;
        uint256 stakeDuration = stakeInfo.endTime - stakeInfo.startTime;
        uint256 reward = calculateQuantumReward(stakedAmount, stakeDuration, stakeInfo.superpositionFactor);
        
        // Marcar o stake como colapsado
        stakeInfo.collapsed = true;
        
        // Transferir tokens + recompensa para o usuário
        _transfer(address(this), msg.sender, stakedAmount + reward);
        
        emit QuantumUnstake(msg.sender, stakedAmount, reward);
    }
    
    /**
     * @dev Calcula a recompensa de staking com base na duração e fator de superposição
     * @param amount Quantidade de tokens em staking
     * @param duration Duração do staking em segundos
     * @param superpositionFactor Fator de superposição (0-100)
     * @return Valor da recompensa
     */
    function calculateQuantumReward(
        uint256 amount, 
        uint256 duration, 
        uint256 superpositionFactor
    ) public view returns (uint256) {
        // Calcular APY base entre MIN_APY e MAX_APY com base no fator de superposição
        uint256 apyRange = MAX_APY - MIN_APY;
        uint256 apy = MIN_APY + (superpositionFactor * apyRange / 100);
        
        // Calcular recompensa proporcional à duração
        uint256 yearInSeconds = 365 days;
        uint256 reward = amount.mul(apy).mul(duration).div(yearInSeconds).div(100);
        
        // Bônus para staking de longo prazo (mais de 6 meses)
        if (duration > 180 days) {
            reward = reward.mul(120).div(100); // 20% de bônus
        }
        
        return reward;
    }
    
    /**
     * @dev Evento de "colapso quântico" que distribui recompensas aleatórias
     * Pode ser chamado apenas pelo proprietário a cada intervalo definido
     */
    function triggerQuantumCollapse() external onlyOwner {
        require(
            block.timestamp >= lastQuantumCollapseTime + quantumCollapseInterval,
            "Intervalo de colapso nao atingido"
        );
        
        lastQuantumCollapseTime = block.timestamp;
        
        // Selecionar aleatoriamente 5 observadores quânticos para receber recompensas
        // Em produção, usar um oráculo como Chainlink VRF para verdadeira aleatoriedade
        address[] memory observers = getQuantumObservers();
        
        if (observers.length > 0) {
            uint256 rewardPool = stakingRewardsAllocation.mul(1).div(100); // 1% do pool de staking
            uint256 rewardPerObserver = rewardPool.div(observers.length > 5 ? 5 : observers.length);
            
            uint256 count = observers.length > 5 ? 5 : observers.length;
            for (uint256 i = 0; i < count; i++) {
                // Selecionar observador aleatório
                uint256 randomIndex = uint256(keccak256(abi.encodePacked(
                    block.timestamp, 
                    i, 
                    blockhash(block.number - 1)
                ))) % observers.length;
                
                address recipient = observers[randomIndex];
                
                // Transferir recompensa
                _transfer(address(this), recipient, rewardPerObserver);
                
                emit QuantumCollapse(recipient, rewardPerObserver);
            }
        }
    }
    
    /**
     * @dev Adiciona um endereço como observador quântico (embaixador)
     * @param observer Endereço a ser adicionado como observador
     */
    function addQuantumObserver(address observer) external onlyOwner {
        quantumObservers[observer] = true;
    }
    
    /**
     * @dev Remove um endereço da lista de observadores quânticos
     * @param observer Endereço a ser removido
     */
    function removeQuantumObserver(address observer) external onlyOwner {
        quantumObservers[observer] = false;
    }
    
    /**
     * @dev Retorna a lista de todos os observadores quânticos
     * @return Array de endereços de observadores
     */
    function getQuantumObservers() public view returns (address[] memory) {
        uint256 count = 0;
        
        // Primeiro, conte quantos observadores existem
        for (uint256 i = 0; i < 1000; i++) {
            address potentialObserver = address(uint160(i + 1));
            if (quantumObservers[potentialObserver]) {
                count++;
            }
        }
        
        // Crie um array do tamanho correto
        address[] memory observers = new address[](count);
        
        // Preencha o array
        uint256 index = 0;
        for (uint256 i = 0; i < 1000; i++) {
            address potentialObserver = address(uint160(i + 1));
            if (quantumObservers[potentialObserver]) {
                observers[index] = potentialObserver;
                index++;
            }
        }
        
        return observers;
    }
    
    /**
     * @dev Queima programada de tokens para criar escassez
     * @param amount Quantidade de tokens a serem queimados
     * @param reason Motivo da queima
     */
    function quantumBurn(uint256 amount, string memory reason) external onlyOwner {
        require(amount > 0, "Quantidade deve ser maior que zero");
        require(balanceOf(address(this)) >= amount, "Saldo insuficiente no contrato");
        
        _burn(address(this), amount);
        burnedAmount = burnedAmount.add(amount);
        
        emit QuantumBurn(amount, reason);
    }
    
    /**
     * @dev Distribui tokens da alocação de recompensas da comunidade
     * @param recipient Endereço do destinatário
     * @param amount Quantidade de tokens a serem distribuídos
     */
    function distributeCommunityRewards(address recipient, uint256 amount) external onlyOwner {
        require(amount > 0, "Quantidade deve ser maior que zero");
        require(amount <= communityRewardsAllocation, "Excede alocacao de recompensas");
        
        communityRewardsAllocation = communityRewardsAllocation.sub(amount);
        _transfer(address(this), recipient, amount);
    }
    
    /**
     * @dev Distribui tokens da alocação de marketing
     * @param recipient Endereço do destinatário
     * @param amount Quantidade de tokens a serem distribuídos
     */
    function distributeMarketingFunds(address recipient, uint256 amount) external onlyOwner {
        require(amount > 0, "Quantidade deve ser maior que zero");
        require(amount <= marketingAllocation, "Excede alocacao de marketing");
        
        marketingAllocation = marketingAllocation.sub(amount);
        _transfer(address(this), recipient, amount);
    }
    
    /**
     * @dev Atualiza o intervalo de colapso quântico
     * @param newInterval Novo intervalo em segundos
     */
    function updateQuantumCollapseInterval(uint256 newInterval) external onlyOwner {
        require(newInterval >= 1 days, "Intervalo muito curto");
        require(newInterval <= 90 days, "Intervalo muito longo");
        
        quantumCollapseInterval = newInterval;
    }
}
