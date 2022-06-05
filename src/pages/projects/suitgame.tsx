import { Fragment, ReactElement, useState } from "react";
import { FaHandRock, FaHandPaper, FaHandPeace } from "react-icons/fa";
import { BsQuestion } from "react-icons/bs";

import AvoidHeader from "components/AvoidHeader/AvoidHeader";
import styles from "assets/styles/pages/projects/suitgame.module.scss";
import IconButton from "components/Button/IconButton";

const getRandomNum = (max: number): number => {
  return Math.floor(Math.random() * max) + 1;
};

const SuitGame: React.FC = () => {
  // 0: Unknown, 1: Rock, 2: Scissor, 3: Paper
  const [playerChoice, setPlayerChoice] = useState<number>(0);
  const [enemyChoice, setEnemyChoice] = useState<number>(0);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [scores, setScores] = useState({ player: 0, enemy: 0 });

  const getIcon = (state: number): ReactElement => {
    return state === 1 ? (
      <FaHandRock size={65} />
    ) : state === 2 ? (
      <FaHandPeace size={65} />
    ) : state === 3 ? (
      <FaHandPaper size={65} />
    ) : (
      <BsQuestion size={65} />
    );
  };

  const setStateChoice = (ply: number, ene: number): void => {
    setPlayerChoice(ply);
    setEnemyChoice(ene);
  };

  const addPlayerScores = (): void => {
    setScores((prev) => ({ player: prev.player + 1, enemy: prev.enemy }));
    console.log("player win");
  };
  const addEnemyScores = (): void => {
    setScores((prev) => ({ player: prev.player, enemy: prev.enemy + 1 }));
    console.log("enemy win");
  };

  const logicGame = (playerChoice: number, enemyChoice: number): void => {
    if (playerChoice === 1 && enemyChoice === 2) {
      addPlayerScores();
    } else if (playerChoice === 1 && enemyChoice === 3) {
      addEnemyScores();
    } else if (playerChoice === 2 && enemyChoice === 1) {
      addEnemyScores();
    } else if (playerChoice === 2 && enemyChoice === 3) {
      addPlayerScores();
    } else if (playerChoice === 3 && enemyChoice === 1) {
      addPlayerScores();
    } else if (playerChoice === 3 && enemyChoice === 2) {
      addEnemyScores();
    }
  };

  const choiceClickHandler = (stateNumber: number): void => {
    setDisabledButton(true)
    const enemyGuess = getRandomNum(3);
    setStateChoice(stateNumber, enemyGuess);
    logicGame(stateNumber, enemyGuess);
    setTimeout(() => {
      setStateChoice(0, 0);
      setDisabledButton(false)
    }, 2000);
  };

  return (
    <Fragment>
      <AvoidHeader />
      <section className={styles.container}>
        <div className={styles.scores}>
          <span className={`${styles.score} ${styles.player}`}>
            {scores.player}
          </span>
          <span className={`${styles.score} ${styles.enemy}`}>
            {scores.enemy}
          </span>
        </div>

        <div className={styles.divider} />

        <div className={styles.playerSide}>
          <IconButton shadow={true} icon={getIcon(playerChoice)} />
        </div>

        <div className={styles.enemySide}>
          <IconButton shadow={true} icon={getIcon(enemyChoice)} />
        </div>

        <div className={styles.choice}>
          <IconButton
            disabled={disabledButton}
            onClick={() => choiceClickHandler(1)}
            icon={<FaHandRock size={30} />}
          />
          <IconButton
            disabled={disabledButton}
            onClick={() => choiceClickHandler(2)}
            icon={<FaHandPeace size={30} />}
          />
          <IconButton
            disabled={disabledButton}
            onClick={() => choiceClickHandler(3)}
            icon={<FaHandPaper size={30} />}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default SuitGame;
