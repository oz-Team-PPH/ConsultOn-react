import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
