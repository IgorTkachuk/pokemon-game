import s from "./style.module.css";
console.log("🚀 ~ file: index.js ~ line 2 ~ s", s);

const HeaderBlock = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.header}>This is Pokemon Card Game</h1>
        <p className={s.paragraph}>Simple Triple Triad Card Game</p>
      </div>
    </div>
  );
};

export default HeaderBlock;
