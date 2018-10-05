function enterText().click {
  TweenMax.to(".btn", 0.1, {
    y: -100,
    opacity: 0
  });

  TweenMax.to(".screen", 0.5, {
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut,
  });

  TweenMax.from(".overlay", 0.5, {
    ease: Power2.easeInOut
  });
  TweenMax.to(".overlay", 1, {
    top: "-110%",
    ease: Expo.easeInOut
  })
TweenMax.to(".overlay2", 2, {
  top: "-110%",
  ease: Expo.easeInOut
});
TweenMax.from(".welc", 2, {
  delay: 0.5,
  opacity: 0,
  ease: Power2.easeInOut
});
TweenMax.to(".welc", 2, {
  opacity: 1,
  y: -300,
  delay: 3.2,
  ease: Power2.easeInOut
});
};
