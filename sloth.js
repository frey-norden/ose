whenSetup(function () {
  makeAnonymousDanceSprite("SLOTH", {x: 200, y: 200});
});

whenKey("up", function () {
  doMoveEachLR("SLOTH", MOVES.Dab, -1);
});

whenKey("down", function () {
  doMoveEachLR("SLOTH", MOVES.Roll, -1);
});

whenKey("space", function () {
  doMoveEachLR("SLOTH", MOVES.XHighKick, -1);
});

whenKey("a", function () {
  doMoveEachLR("SLOTH", MOVES.Floss, -1);
});
