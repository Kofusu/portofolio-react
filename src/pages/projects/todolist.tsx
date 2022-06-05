import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "services/reduxStore/reducers";

import AvoidHeader from "components/AvoidHeader/AvoidHeader";
import TextInput from "components/MiddleInput/TextInput";
import Button from "components/Button/Button";
import ToDoLists from "components/ToDoLists/ToDoLists";
import styles from "assets/styles/pages/projects/todolist.module.scss";
import { todolistActions } from "services/reduxStore/actions";

const ToDoList: React.FC = () => {
  const [inputState, setInputState] = useState<string>("");
  const listTodo = useSelector((store: RootState) => store.todolist.value)
  const dispatch = useDispatch<AppDispatch>()

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
      setInputState(e.currentTarget.value);
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const inputData = {
      id: nanoid(),
      text: inputState,
    };
    dispatch(todolistActions.addToDo(inputData))
    setInputState("");
  };

  const deleteHandler = (id: string) => {
      dispatch(todolistActions.removeToDo(id))
  }

  const resetListHandler = () => {
    // setListToDo([]);
    dispatch(todolistActions.resetToDo())
  }

  return (
    <Fragment>
      <AvoidHeader />
      <form onSubmit={submitHandler} className={styles.form}>
        <TextInput
          state={inputState}
          onChange={changeHandler}
          label="To Do List"
        />
        <span>
          <Button type="submit" text="Add" />
          <Button onClick={resetListHandler} type="button" text="Reset Lists" />
        </span>
      </form>
      <AnimatePresence>
      <motion.div className={styles.listsContainer}>
        {listTodo.map((item) => {
          return (
            <ToDoLists
              key={item.id}
              id={item.id}
              onDelete={deleteHandler}
              text={item.text}
            />
          );
        })}
      </motion.div>
      </AnimatePresence>
    </Fragment>
  );
};

export default ToDoList;
