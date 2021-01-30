import s from "./style.module.css";

const Layout = ({ id, title, descr, urlBg, colorBg }) => {
  let styleBg = colorBg ? { background: colorBg } : {};
  styleBg = urlBg
    ? {
        ...styleBg,
        backgroundImage: `url(${urlBg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }
    : styleBg;

  return (
    <section style={styleBg} className={s.root} id={id}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className='desc full'>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
