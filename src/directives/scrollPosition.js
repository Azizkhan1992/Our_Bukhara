const Scroll = {
    
  getPosition() {
    let position
    window.addEventListener("scroll", () => {
        return window.scrollY
    });
    return position
  },
};

export default Scroll;
