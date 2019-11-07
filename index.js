// import styles here
import "./style/main.css"
import "./style/other.css"

// A dependency graph that contains any wasm must all be imported
// asynchronously. This file does the single async import, so
// that no one else needs to worry about it again.
import("./module.js")
  .catch(e => console.error("Error importing module:", e));
