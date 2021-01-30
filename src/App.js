import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";

import bg3 from "./assets/bg3.jpeg";
import bg2 from "./assets/bg2.jpeg";

const App = () => {
  return (
    <>
      <Header title='Header title' descr='Header descr' />
      <Layout
        id='1'
        title='Layout first title with urlBg'
        descr='Layout first descr with urlBg'
        urlBg={bg3}
      />
      <Layout
        id='2'
        colorBg='#181e2ba1'
        title='Layout first title with colorBg'
        descr='Layout first descr with colorBg'
        urlBg=''
      />
      <Layout
        id='3'
        title='Layout last title with urlBg'
        descr='Layout last descr with urlBg'
        urlBg={bg2}
      />
      <Footer />
    </>
  );
};

export default App;
