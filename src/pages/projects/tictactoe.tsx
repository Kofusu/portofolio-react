import { Fragment, useState } from "react";

import AvoidHeader from "components/AvoidHeader/AvoidHeader";
import styles from "assets/styles/pages/projects/tictactoe.module.scss";
import GridContainer from "components/Grid/GriidContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/Button/Button";

const TicTacToe: React.FC = () => {
  const [isXTurn, setisXTurn] = useState<boolean>(true);
  const [tile, setTile] = useState<string[]>([
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
  ]);
  const [isWin, setIsWin] = useState<boolean>(false);

  const resetTiles = () => {
    setisXTurn(true);
    setTile(["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
    setIsWin(false);
  };

  const checkWin = (tiles: string[]) => {
    const condition1 =
      tiles[0] === tiles[1] &&
      tiles[0] === tiles[2] &&
      tiles[1] === tiles[2] &&
      (tiles[0] !== "_" || tiles[1] !== "_" || tiles[2] !== "_");
    const condition2 =
      tiles[3] === tiles[4] &&
      tiles[3] === tiles[5] &&
      tiles[4] === tiles[5] &&
      (tiles[3] !== "_" || tiles[4] !== "_" || tiles[5] !== "_");
    const condition3 =
      tiles[6] === tiles[7] &&
      tiles[6] === tiles[8] &&
      tiles[7] === tiles[8] &&
      (tiles[6] !== "_" || tiles[7] !== "_" || tiles[8] !== "_");
    const condition4 =
      tiles[0] === tiles[3] &&
      tiles[0] === tiles[6] &&
      tiles[3] === tiles[6] &&
      (tiles[0] !== "_" || tiles[3] !== "_" || tiles[6] !== "_");
    const condition5 =
      tiles[1] === tiles[4] &&
      tiles[1] === tiles[7] &&
      tiles[4] === tiles[7] &&
      (tiles[1] !== "_" || tiles[4] !== "_" || tiles[7] !== "_");
    const condition6 =
      tiles[2] === tiles[5] &&
      tiles[2] === tiles[8] &&
      tiles[5] === tiles[8] &&
      (tiles[2] !== "_" || tiles[5] !== "_" || tiles[8] !== "_");
    const condition7 =
      tiles[0] === tiles[4] &&
      tiles[0] === tiles[8] &&
      tiles[4] === tiles[8] &&
      (tiles[0] !== "_" || tiles[4] !== "_" || tiles[8] !== "_");
    const condition8 =
      tiles[2] === tiles[4] &&
      tiles[2] === tiles[6] &&
      tiles[4] === tiles[6] &&
      (tiles[2] !== "_" || tiles[4] !== "_" || tiles[6] !== "_");
    if (
      condition1 ||
      condition2 ||
      condition3 ||
      condition4 ||
      condition5 ||
      condition6 ||
      condition7 ||
      condition8
    ) {
      setIsWin(true);
    } else {
      console.log("draw");
    }
  };

  const clickHandler = (num: number): void => {
    setTile((item) => {
      const updatedTiles = item.map((value, index) => {
        if (index === num && value === "_") {
          setisXTurn((s) => !s);
          return isXTurn ? "X" : "O";
        } else {
          return value;
        }
      });

      checkWin(updatedTiles);
      return updatedTiles;
    });
  };

  return (
    <Fragment>
      <AvoidHeader />
      <div className={styles.container}>
        {!isWin ? (
          <Fragment>
            <span className={styles.turn}>{isXTurn ? "X" : "O"} Turn</span>
            <GridContainer>
              {/* Row 1 */}
              <GridItem
                className={styles.gridItem}
                onClick={() => clickHandler(0)}
                text={tile[0]}
              />
              <GridItem
                className={styles.gridItem}
                onClick={() => clickHandler(1)}
                text={tile[1]}
              />
              <GridItem
                className={styles.gridItem}
                onClick={() => clickHandler(2)}
                text={tile[2]}
              />
              {/* Row 2 */}
              <GridItem
                className={styles.gridItem}
                onClick={() => clickHandler(3)}
                text={tile[3]}
              />
              <GridItem
                className={styles.gridItem}
                onClick={() => clickHandler(4)}
                text={tile[4]}
              />
              <GridItem
                className={styles.gridItem}
                onClick={() => clickHandler(5)}
                text={tile[5]}
              />
              {/* Row 3 */}
              <GridItem
                className={styles.gridItem}
                onClick={() => clickHandler(6)}
                text={tile[6]}
              />
              <GridItem
                className={styles.gridItem}
                onClick={() => clickHandler(7)}
                text={tile[7]}
              />
              <GridItem
                className={styles.gridItem}
                onClick={() => clickHandler(8)}
                text={tile[8]}
              />
            </GridContainer>
          </Fragment>
        ) : (
          <span className={styles.winner}>{isXTurn ? "O" : "X"} Win</span>
        )}
        <Button onClick={resetTiles} text="Reset & Play Again" type="button" />
      </div>
    </Fragment>
  );
};

export default TicTacToe;
