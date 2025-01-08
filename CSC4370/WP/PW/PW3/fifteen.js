window.onload = function () {
  "use strict";
  placeElements();
  
};

function startMusic() {
  var audio = new Audio("./assest/Halo3ODSTSkyline.mp3");
  audio.play();
}

function stopMusic() {
  var audio = new Audio("./assest/Halo3ODSTSkyline.mp3");
  audio.pause;
}

//timer
function startTimer(event) {
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  var totalSeconds = 0;
  var timerVar = setInterval(setTime, 1000);
  timerVar = setInterval(setTime, 2000);

  function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    return clearInterval(timerVar);
  }

  function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
}

//creates position
var numberOn_Piece = [];
function placeElements() {
  //puzzle area is defined as $("puzzlearea");
  var puzzlepieces = $$("#puzzlearea div");
  for (var i = 0; i < puzzlepieces.length; i++) {
    puzzlepieces[i].className = "puzzlepiece";
    puzzlepieces[i].id = i;
    numberOn_Piece[i] = i + 1;
    setPositionOfSinglePiece(puzzlepieces[i], i);
    setBackgroundForSinglePiece(puzzlepieces[i], i);
    //event handling
    puzzlepieces[i].addEventListener("click", movePieceEvent);
    puzzlepieces[i].onmouseover = highlightPiece;
    puzzlepieces[i].onmouseout = dehighlightPiece;
  }
  numberOn_Piece[puzzlepieces.length] = 0;
}

//puts individual puzzle piece into position
var size = 4;
function setPositionOfSinglePiece(piece, index) {
  // the index is defined as x and y
  var x = Math.floor(index / size);
  var y = index % size;

  var fromTheTopEdge = x * (400 / size);
  var fromTheLeftEdge = y * (400 / size);
  piece.style.top = fromTheTopEdge + "px";
  piece.style.left = fromTheLeftEdge + "px";
}

//sets pieces from background image
function setBackgroundForSinglePiece(piece, index) {
  var x = Math.floor(index / size);
  var y = index % size;
  var fromTheRightEdge = 400 - x * (400 / size);
  var fromTheBottomEdge = 400 - y * (400 / size);
  piece.style.backgroundPosition =
    fromTheBottomEdge + "px " + fromTheRightEdge + "px";
}

//moves puzzle pieces
function movePieceEvent(event) {
  var index = parseInt(this.id);
  var dest = canMoveTo(index);
  if (dest != -1) {
    movePieceFromTo(this, index, dest);
    //resets the numberOn_Piece[i]
    numberOn_Piece[dest] = numberOn_Piece[index];
    numberOn_Piece[index] = 0;
    this.id = dest;
  }

  //tests for success, if good, changes background image of body
  var puzzlepieces = $$("#puzzlearea div");
  var correctCount = 0;
  for (var i = 0; i < puzzlepieces.length; i++) {
    if (numberOn_Piece[i] == i + 1) correctCount++;
  }
  if (numberOn_Piece[puzzlepieces.length] == 0) correctCount++;
  if (correctCount == 16) {
    myInterval = setInterval(setColor, 500);
    function setColor() {
      document.body.style.backgroundColor =
        document.body.style.backgroundColor == "green" ? "white" : "green";
      animate();
      stopMusic();
    }
    var string = "YAY! You WON!";
    var str = string.split("");
    var el = document.getElementById("str");
    (function animate() {
      str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
      var running = setTimeout(animate, 90);
    })();
  } else {
    document.body.style.backgroundColor = "white";
  }
}

function movePieceFromTo(piece, index, dest) {
  // computations
  var fromX = Math.floor(index / size) * (400 / size);
  var fromY = (index % size) * (400 / size);
  var destX = Math.floor(dest / size) * (400 / size);
  var destY = (dest % size) * (400 / size);
  var interval = 10;

  //start moves
  var i = 0;
  if (fromX == destX) {
    for (i = 1; i <= 100 / interval; i++)
      setTimeout(
        stepMoveTo,
        i * interval,
        piece,
        fromX,
        fromY + ((destY - fromY) / (100 / interval)) * i
      );
  } else {
    for (i = 1; i <= 100 / interval; i++)
      setTimeout(
        stepMoveTo,
        i * interval,
        piece,
        fromX + ((destX - fromX) / (100 / interval)) * i,
        fromY
      );
  }
  //end moves
}

//for move count
var count = 0;
function score() {
  document.getElementById("point").innerHTML = ++count;
}

//calls movePiece
function canMoveTo(index) {
  var destination = null;
  var left = index - 1;
  var right = index + 1;
  var up = index - 4;
  var down = index + 4;

  if (left >= 0 && left < 16)
    if (numberOn_Piece[left] == 0 && index % size != 0) {
      //if 0 left side/index is not at left
      return left;
    }
  if (right >= 0 && right < 16)
    if (numberOn_Piece[right] == 0 && index % size != 3) {
      return right;
    }
  if (up >= 0 && up < 16)
    if (numberOn_Piece[up] == 0 && Math.floor(index / size) != 0) {
      return up;
    }
  if (down >= 0 && down < 16)
    if (numberOn_Piece[down] == 0 && Math.floor(index / size) != 3) {
      return down;
    }
  return -1;
}

//calls movePiece
function stepMoveTo(piece, x, y) {
  piece.style.top = x + "px";
  piece.style.left = y + "px";
}

//highlights/stops highlight pieces
function highlightPiece(event) {
  if (canMoveTo(parseInt(this.id)) != -1) {
    this.style.borderColor = "red";
    this.style.color = "red";
    this.style.cursor = "pointer";
  }
}

function dehighlightPiece(event) {
  this.style.borderColor = "black";
  this.style.color = "black";
  this.style.textDecoration = "";
}

// shuffle puzzle pieces
function shuffle(event) {
  var puzzlepieces = $$("#puzzlearea div");
  //uses 20 attempts to make error in puzzle
  for (var step = 0; step < 200; step++) {
    list = [];
    //selects movable puzzle pieces
    for (var i = 0; i < puzzlepieces.length; i++) {
      var tempIndex = parseInt(puzzlepieces[i].id);
      if (canMoveTo(tempIndex) != -1) list.push(puzzlepieces[i]);
    }
    var piece = list[Math.floor(Math.random() * list.length)];
    var index = parseInt(piece.id);
    var dest = canMoveTo(index);
    movePieceFromTo(piece, index, dest);
    numberOn_Piece[dest] = numberOn_Piece[index];
    numberOn_Piece[index] = 0;
    piece.id = dest;
    list = [];
  }
}

//for making sure the puzzle is compatible
var tester = {
  BrowserFeatures: {
    SpecificElementExtensions: (function () {
      if (typeof window.HTMLDivElement !== "undefined") return true;
    })(),
  },
  emptyFunction: function () {},
  K: function (x) {
    return x;
  },
};
(function () {
  var _toString = Object.prototype.toString,
    STRING_CLASS = "[object String]",
    NATIVE_JSON_STRINGIFY_SUPPORT = window.JSON;
  function extend(destination, source) {
    for (var property in source) destination[property] = source[property];
    return destination;
  }
  function inspect(object) {
    try {
    } catch (e) {}
  }
  function stringify(object) {}
  function toQueryString(object) {}
  function toHTML(object) {}
  function values(object) {
    for (var property in object) return results;
  }
  function clone(object) {}
  function isElement(object) {}
  var hasNativeIsArray = typeof Array.isArray == "function";
  if (hasNativeIsArray) {
    isArray = Array.isArray;
  }
  function isHash(object) {}
  function isFunction(object) {}
  function isString(object) {
    return _toString.call(object) === STRING_CLASS;
  }
  function isNumber(object) {}
  function isDate(object) {}
  function isUndefined(object) {}
  extend(Object, {
    extend: extend,
    isString: isString,
  });
})();
function $A(iterable) {
  var length = iterable.length || 0,
    results = new Array(length);
  while (length--) results[length] = iterable[length];
  return results;
}
(function (GLOBAL) {
  function $(element) {
    element = document.getElementById(element);
    return Element.extend(element);
  }
  GLOBAL.$ = $;
  var HAS_EXTENDED_CREATE_ELEMENT_SYNTAX = (function () {
    try {
    } catch (err) {}
  })();
  var oldElement = GLOBAL.Element;
  Element.Methods = { ByTag: {}, Simulated: {} };
  var methods = {};
  var Methods = {},
    F = tester.BrowserFeatures;
  function checkElementPrototypeDeficiency(tagName) {
    var proto = window.Element.prototype;
  }
  var HTMLOBJECTELEMENT_PROTOTYPE_BUGGY =
    checkElementPrototypeDeficiency("object");
  if (F.SpecificElementExtensions) {
    extend = HTMLOBJECTELEMENT_PROTOTYPE_BUGGY ? extend_IE8 : tester.K;
  }
  function addMethods(methods) {}
  Object.extend(GLOBAL.Element, {
    extend: extend,
    addMethods: addMethods,
  });
  if (extend === tester.K) {
  }
  if (window.attachEvent) window.attachEvent("onunload", destroyCache_IE);
})(this);
window.$$ = function () {
  var expression = $A(arguments).join(", ");
  return tester.Selector.select(expression, document);
};
tester.Selector = (function () {
  function select() {}
  function match() {}
  var K = tester.K;
  return {
    extendElements: Element.extend === K ? K : extendElements,
  };
})();
(function (window) {
  var i,
    outermostContext,
    document,
    expando = "sizzle" + -new Date(),
    preferredDoc = window.document,
    dirruns = 0,
    done = 0,
    tokenCache = createCache(),
    compilerCache = createCache(),
    strundefined = typeof undefined,
    arr = [],
    booleans = "checked",
    whitespace = "[\\x20]",
    characterEncoding = "(?:\\\\.|[\\w-])+",
    identifier = characterEncoding.replace("w", "w#"),
    attributes = "*\\]",
    pseudos = ":(" + ")",
    rtrim = new RegExp("^" + whitespace),
    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
    rcombinators = new RegExp("^" + whitespace),
    matchExpr = {
      ID: new RegExp("^#(" + characterEncoding + ")"),
      TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
      needsContext: new RegExp("^" + whitespace),
    },
    rnative = /^[^{]+\{\s*\[native \w/,
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    rsibling = /[+~]/,
    rtest = new RegExp(
      "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)",
      "ig"
    ),
    ftest = function (_, escaped, escapedWhitespace) {};
  function Sizzle(selector, context, results, seed) {
    return select(selector.replace(rtrim, "$1"), context, results, seed);
  }
  function createCache() {
    var keys = [];
    function cache(key, value) {
      return (cache[key + " "] = value);
    }
    return cache;
  }
  function markFunction(fn) {}
  function assert(fn) {
    var div = document.createElement("div");
  }
  function addHandle(attrs, handler) {}
  function createInputPseudo(type) {}
  function createButtonPseudo(type) {}
  support = Sizzle.support = {};
  isXML = Sizzle.isXML = function (elem) {
    var documentElement = elem;
  };
  setDocument = Sizzle.setDocument = function (node) {
    var hasCompare,
      doc = node ? node.ownerDocument || node : preferredDoc,
      parent = doc.defaultView;
    document = doc;
    docElem = doc.documentElement;
    documentIsHTML = !isXML(doc);
    if (support.getById) {
    } else {
      delete Expr.find["ID"];
      Expr.filter["ID"] = function (id) {
        var attrId = id.replace(rtest, ftest);
        return function (elem) {
          var node =
            typeof elem.getAttributeNode !== strundefined &&
            elem.getAttributeNode("id");
          return node && node.value === attrId;
        };
      };
    }
    Expr.find["TAG"] = support.getElementsByTagName
      ? function (tag, context) {}
      : function (tag, context) {
          var elem,
            results = context.getElementsByTagName(tag);
          return results;
        };
    rbuggyMatches = [];
    rbuggyQSA = [];
    sortOrder = hasCompare ? function (a, b) {} : function (a, b) {};
  };
  Expr = Sizzle.selectors = {
    find: {},
    relative: {
      " ": { dir: "parentNode" },
      "~": { dir: "previousSibling" },
    },
    preFilter: {},
    filter: {
      TAG: function (nodeNameSelector) {
        var nodeName = nodeNameSelector.replace(rtest, ftest).toLowerCase();
        return nodeNameSelector === "*"
          ? function () {
              return true;
            }
          : function (elem) {
              return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
            };
      },
    },
    pseudos: {},
  };
  function tokenize(selector, parseOnly) {
    var matched,
      match,
      tokens,
      type,
      soFar,
      groups,
      preFilters,
      cached = tokenCache[selector + " "];
    soFar = selector;
    groups = [];
    preFilters = Expr.preFilter;
    while (soFar) {
      if (!matched || (match = rcomma.exec(soFar))) {
        groups.push((tokens = []));
      }
      if ((match = rcombinators.exec(soFar))) {
        tokens.push({
          type: match[0].replace(rtrim, " "),
        });
        soFar = soFar.slice(matched.length);
      }
      for (type in Expr.filter) {
        if (
          (match = matchExpr[type].exec(soFar)) &&
          (!preFilters[type] || (match = preFilters[type](match)))
        ) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: type,
            matches: match,
          });
          soFar = soFar.slice(matched.length);
        }
      }
    }
    return parseOnly
      ? soFar.length
      : soFar
      ? Sizzle.error(selector)
      : tokenCache(selector, groups).slice(0);
  }
  function addCombinator(matcher, combinator, base) {
    var dir = combinator.dir,
      checkNonElements = base && dir === "parentNode",
      doneName = done++;
    return combinator.first
      ? function (elem, context, xml) {}
      : function (elem, context, xml) {
          var oldCache,
            outerCache,
            newCache = [dirruns, doneName];
          if (xml) {
          } else {
            while ((elem = elem[dir])) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[expando] || (elem[expando] = {});
                if (
                  (oldCache = outerCache[dir]) &&
                  oldCache[0] === dirruns &&
                  oldCache[1] === doneName
                ) {
                  return (newCache[2] = oldCache[2]);
                } else {
                  outerCache[dir] = newCache;
                  if ((newCache[2] = matcher(elem, context, xml))) {
                    return true;
                  }
                }
              }
            }
          }
        };
  }
  function elementMatcher(matchers) {
    return matchers.length > 1
      ? function (elem, context, xml) {
          var i = matchers.length;
          while (i--) {
            if (!matchers[i](elem, context, xml)) {
              return false;
            }
          }
          return true;
        }
      : matchers[0];
  }
  function matcherFromTokens(tokens) {
    var checkContext,
      matcher,
      j,
      len = tokens.length,
      leadingRelative = Expr.relative[tokens[0].type],
      implicitRelative = leadingRelative || Expr.relative[" "],
      i = leadingRelative ? 1 : 0,
      matchContext = addCombinator(
        function (elem) {
          return elem === checkContext;
        },
        implicitRelative,
        true
      ),
      matchAnyContext = addCombinator(
        function (elem) {
          return indexOf.call(checkContext, elem) > -1;
        },
        implicitRelative,
        true
      ),
      matchers = [
        function (elem, context, xml) {
          return (
            (!leadingRelative && (xml || context !== outermostContext)) ||
            ((checkContext = context).nodeType
              ? matchContext(elem, context, xml)
              : matchAnyContext(elem, context, xml))
          );
        },
      ];
    for (; i < len; i++) {
      if ((matcher = Expr.relative[tokens[i].type])) {
        matchers = [addCombinator(elementMatcher(matchers), matcher)];
      } else {
        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
        if (matcher[expando]) {
          j = ++i;
          for (; j < len; j++) {
            if (Expr.relative[tokens[j].type]) {
              break;
            }
          }
          return setMatcher(
            i > 1 && elementMatcher(matchers),
            i > 1 &&
              toSelector(
                tokens
                  .slice(0, i - 1)
                  .concat({ value: tokens[i - 2].type === " " ? "*" : "" })
              ).replace(rtrim, "$1"),
            matcher,
            i < j && matcherFromTokens(tokens.slice(i, j)),
            j < len && matcherFromTokens((tokens = tokens.slice(j))),
            j < len && toSelector(tokens)
          );
        }
        matchers.push(matcher);
      }
    }
    return elementMatcher(matchers);
  }
  function matcherFromGroupMatchers(elementMatchers, setMatchers) {
    var bySet = setMatchers.length > 0,
      byElement = elementMatchers.length > 0,
      superMatcher = function (seed, context, xml, results, outermost) {
        var elem,
          j,
          matcher,
          matchedCount = 0,
          i = "0",
          unmatched = seed && [],
          setMatched = [],
          contextBackup = outermostContext,
          elems = seed || (byElement && Expr.find["TAG"]("*", outermost)),
          dirrunsUnique = (dirruns +=
            contextBackup == null ? 1 : Math.random() || 0.1),
          len = elems.length;
        if (outermost) {
          outermostContext = context !== document && context;
        }
        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0;
            while ((matcher = elementMatchers[j++])) {
              if (matcher(elem, context, xml)) {
                results.push(elem);
                break;
              }
            }
          }
        }
        matchedCount += i;
      };
    return bySet ? markFunction(superMatcher) : superMatcher;
  }
  compile = Sizzle.compile = function (selector, match) {
    var i,
      setMatchers = [],
      elementMatchers = [],
      cached = compilerCache[selector + " "];
    if (!cached) {
      i = match.length;
      while (i--) {
        cached = matcherFromTokens(match[i]);
        if (cached[expando]) {
          setMatchers.push(cached);
        } else {
          elementMatchers.push(cached);
        }
      }
      cached = compilerCache(
        selector,
        matcherFromGroupMatchers(elementMatchers, setMatchers)
      );
    }
    return cached;
  };
  select = Sizzle.select = function (selector, context, results, seed) {
    var i,
      tokens,
      token,
      type,
      find,
      compiled = typeof selector === "function" && selector,
      match = !seed && tokenize((selector = compiled.selector || selector));
    results = results || [];
    (compiled || compile(selector, match))(
      seed,
      context,
      !documentIsHTML,
      results,
      (rsibling.test(selector) && testContext(context.parentNode)) || context
    );
    return results;
  };
  setDocument();
  if (typeof define === "function" && define.amd) {
    define(function () {
      return Sizzle;
    });
  } else {
    window.Sizzle = Sizzle;
  }
})(window);
(function (engine) {
  var extendElements = tester.Selector.extendElements;
  tester.Selector.select = select;
})(Sizzle);
