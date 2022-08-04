import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./homeView.css";

function ErrorPage({userlog}) {

  return (<>
    <div>
      <Navbar userlog={userlog} />
    </div>
   <div className="background"> </div>
   <img src="https://text.glitter-graphics.net/gold/f.gif" border="0"/>
   <img src="https://text.glitter-graphics.net/gold/i.gif" border="0"/>
   <img src="https://text.glitter-graphics.net/gold/j.gif" border="0"/>
   <img src="https://text.glitter-graphics.net/gold/a.gif" border="0"/>
   <img src="https://text.glitter-graphics.net/gold/t.gif" border="0"/>
   <img src="https://text.glitter-graphics.net/gold/e.gif" border="0"/>
   <img src="https://dl3.glitter-graphics.net/empty.gif" width="20" border="0"/>
   <img src="https://dl3.glitter-graphics.net/empty.gif" width="20" border="0"/><img src="https://text.glitter-graphics.net/gold/l.gif" border="0"/><img src="https://text.glitter-graphics.net/gold/a.gif" border="0"/><img src="https://dl3.glitter-graphics.net/empty.gif" width="20" border="0"/><img src="https://dl3.glitter-graphics.net/empty.gif" width="20" border="0"/><img src="https://text.glitter-graphics.net/gold/r.gif" border="0"/><img src="https://text.glitter-graphics.net/gold/u.gif" border="0"/><img src="https://text.glitter-graphics.net/gold/t.gif" border="0"/><img src="https://text.glitter-graphics.net/gold/a.gif" border="0"/>
  
    <div className="footerDiv">
      <Footer />
    </div>
  </>

  );
}

export default ErrorPage;
