'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var get360ViewProps = function get360ViewProps(image) {
  return {
    marks: attr(image, 'data-marks'),
    carId: parseInt(attr(image, 'data-carId')),
    folder: attr(image, 'folder') || attr(image, 'data-folder') || '/',
    filename: attr(image, 'filename') || attr(image, 'data-filename') || 'image-{index}.jpg',
    imageList: attr(image, 'image-list') || attr(image, 'data-image-list') || null,
    indexZeroBase: parseInt(attr(image, 'index-zero-base') || attr(image, 'data-index-zero-base') || 0, 10),
    amount: parseInt(attr(image, 'amount') || attr(image, 'data-amount') || 36, 10),
    speed: parseInt(attr(image, 'speed') || attr(image, 'data-speed') || 80, 10),
    dragSpeed: parseInt(attr(image, 'drag-speed') || attr(image, 'data-drag-speed') || 150, 10),
    keys: isTrue(image, 'keys'),
    boxShadow: attr(image, 'box-shadow') || attr(image, 'data-box-shadow'),
    autoplay: isTrue(image, 'autoplay'),
    autoplayReverse: isTrue(image, 'autoplay-reverse'),
    bottomCircle: isTrue(image, 'bottom-circle'),
    fullScreen: isTrue(image, 'full-screen'),
    magnifier: (attr(image, 'magnifier') !== null || attr(image, 'data-magnifier') !== null) && parseInt(attr(image, 'magnifier') || attr(image, 'data-magnifier'), 10),
    bottomCircleOffset: parseInt(attr(image, 'bottom-circle-offset') || attr(image, 'data-bottom-circle-offset') || 5, 10),
    ratio: parseFloat(attr(image, 'ratio') || attr(image, 'data-ratio') || 0) || false,
    responsive: isTrue(image, 'responsive'),
    ciToken: attr(image, 'responsive') || attr(image, 'data-responsive') || 'demo',
    ciSize: attr(image, 'size') || attr(image, 'data-size'),
    ciOperation: attr(image, 'operation') || attr(image, 'data-operation') || 'width',
    ciFilters: attr(image, 'filters') || attr(image, 'data-filters') || 'q35',
    lazyload: isTrue(image, 'lazyload'),
    lazySelector: attr(image, 'lazyload-selector') || attr(image, 'data-lazyload-selector') || 'lazyload',
    spinReverse: isTrue(image, 'spin-reverse'),
    controlReverse: isTrue(image, 'control-reverse'),
    stopAtEdges: isTrue(image, 'stop-at-edges'),
    hide360Logo: isTrue(image, 'hide-360-logo'),
    logoSrc: attr(image, 'logo-src') || 'https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/360_view.svg'
  };
};

var isTrue = function isTrue(image, type) {
  var imgProp = attr(image, type);
  var imgDataProp = attr(image, 'data-' + type);

  return imgProp !== null && imgProp !== 'false' || imgDataProp !== null && imgDataProp !== 'false';
};

var attr = function attr(element, attribute) {
  return element.getAttribute(attribute);
};

var set360ViewIconStyles = function set360ViewIconStyles(view360Icon) {
  view360Icon.style.position = 'absolute';
  view360Icon.style.top = '0';
  view360Icon.style.bottom = '0';
  view360Icon.style.left = '0';
  view360Icon.style.right = '0';
  view360Icon.style.width = '100px';
  view360Icon.style.height = '100px';
  view360Icon.style.margin = 'auto';
  view360Icon.style.backgroundColor = 'rgba(255,255,255,0.8)';
  view360Icon.style.borderRadius = '50%';
  view360Icon.style.boxShadow = 'rgb(255, 255, 255, 0.5) 0px 0px 4px';
  view360Icon.style.transition = '0.5s all';
  view360Icon.style.color = 'rgb(80,80,80)';
  view360Icon.style.textAlign = 'center';
  view360Icon.style.lineHeight = '100px';
  view360Icon.style.zIndex = '2';
};

var setView360Icon = function setView360Icon(view360Icon, logoSrc) {
  view360Icon.style.background = 'rgba(255,255,255,0.8) url(\'' + logoSrc + '\') 50% 50% / contain no-repeat';
};

var set360ViewCircleIconStyles = function set360ViewCircleIconStyles(view360CircleIcon, bottomCircleOffset) {
  view360CircleIcon.src = 'https://scaleflex.ultrafast.io/https://scaleflex.api.airstore.io/v1/get/_/2236d56f-914a-5a8b-a3ae-f7bde1c50000/360.svg';
  view360CircleIcon.style.position = 'absolute';
  view360CircleIcon.style.top = 'auto';
  view360CircleIcon.style.bottom = bottomCircleOffset + '%';
  view360CircleIcon.style.left = '0';
  view360CircleIcon.style.right = '0';
  view360CircleIcon.style.width = '80%';
  view360CircleIcon.style.height = 'auto';
  view360CircleIcon.style.margin = 'auto';
  view360CircleIcon.style.transition = '0.5s all';
  view360CircleIcon.style.zIndex = '2';
};

var setLoaderStyles = function setLoaderStyles(loader) {
  loader.className = 'cloudimage-360-loader';
  loader.style.position = 'absolute';
  loader.style.zIndex = '100';
  loader.style.top = '0';
  loader.style.left = '0';
  loader.style.right = '0';
  loader.style.width = '0%';
  loader.style.height = '8px';
  loader.style.background = 'rgb(165,175,184)';
};

var setBoxShadowStyles = function setBoxShadowStyles(boxShadow, boxShadowValue) {
  boxShadow.className = 'cloudimage-360-box-shadow';
  boxShadow.style.position = 'absolute';
  boxShadow.style.zIndex = '99';
  boxShadow.style.top = '0';
  boxShadow.style.left = '0';
  boxShadow.style.right = '0';
  boxShadow.style.bottom = '0';
  boxShadow.style.boxShadow = boxShadowValue;
};

var setMagnifyIconStyles = function setMagnifyIconStyles(magnifyIcon, fullScreen) {
  magnifyIcon.style.position = 'absolute';
  magnifyIcon.style.top = fullScreen ? '35px' : '5px';
  magnifyIcon.style.right = '5px';
  magnifyIcon.style.width = '25px';
  magnifyIcon.style.height = '25px';
  magnifyIcon.style.zIndex = '101';
  magnifyIcon.style.cursor = 'pointer';
  magnifyIcon.style.background = 'url(\'https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/loupe.svg\') 50% 50% / cover no-repeat';
};

var setFullScreenModalStyles = function setFullScreenModalStyles(fullScreenModal) {
  fullScreenModal.style.position = 'fixed';
  fullScreenModal.style.top = '0';
  fullScreenModal.style.bottom = '0';
  fullScreenModal.style.left = '0';
  fullScreenModal.style.right = '0';
  fullScreenModal.style.width = '100%';
  fullScreenModal.style.height = '100%';
  fullScreenModal.style.zIndex = '999';
  fullScreenModal.style.background = '#fff';
};

var setFullScreenIconStyles = function setFullScreenIconStyles(fullScreenIcon) {
  fullScreenIcon.style.position = 'absolute';
  fullScreenIcon.style.top = '5px';
  fullScreenIcon.style.right = '5px';
  fullScreenIcon.style.width = '25px';
  fullScreenIcon.style.height = '25px';
  fullScreenIcon.style.zIndex = '101';
  fullScreenIcon.style.cursor = 'pointer';
  fullScreenIcon.style.background = 'url(\'https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/full_screen.svg\') 50% 50% / cover no-repeat';
};

var setCloseFullScreenViewStyles = function setCloseFullScreenViewStyles(closeFullScreenIcon) {
  closeFullScreenIcon.style.position = 'absolute';
  closeFullScreenIcon.style.top = '5px';
  closeFullScreenIcon.style.right = '5px';
  closeFullScreenIcon.style.width = '25px';
  closeFullScreenIcon.style.height = '25px';
  closeFullScreenIcon.style.zIndex = '101';
  closeFullScreenIcon.style.cursor = 'pointer';
  closeFullScreenIcon.style.background = 'url(\'https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/cross.svg\') 50% 50% / cover no-repeat';
};

var magnify = function magnify(container, src, glass, zoom) {
  var w = void 0,
      h = void 0,
      bw = void 0;
  glass.setAttribute("class", "img-magnifier-glass");
  container.prepend(glass);

  glass.style.backgroundColor = '#fff';
  glass.style.backgroundImage = "url('" + src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = container.offsetWidth * zoom + "px " + container.offsetHeight * zoom + "px";
  glass.style.position = 'absolute';
  glass.style.border = '3px solid #000';
  glass.style.borderRadius = '50%';
  glass.style.cursor = 'wait';
  glass.style.lineHeight = '200px';
  glass.style.textAlign = 'center';
  glass.style.zIndex = '1000';

  glass.style.width = '250px';
  glass.style.height = '250px';
  glass.style.top = '-75px';
  glass.style.right = '-85px';

  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  glass.addEventListener("mousemove", moveMagnifier);
  container.addEventListener("mousemove", moveMagnifier);

  glass.addEventListener("touchmove", moveMagnifier);
  container.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e) {
    var pos = void 0,
        x = void 0,
        y = void 0;

    e.preventDefault();

    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;

    if (x > container.offsetWidth - w / zoom) {
      x = container.offsetWidth - w / zoom;
    }

    if (x < w / zoom) {
      x = w / zoom;
    }

    if (y > container.offsetHeight - h / zoom) {
      y = container.offsetHeight - h / zoom;
    }

    if (y < h / zoom) {
      y = h / zoom;
    }

    glass.style.left = x - w + "px";
    glass.style.top = y - h + "px";

    glass.style.backgroundPosition = "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a = void 0,
        x = 0,
        y = 0;
    e = e || window.event;
    a = container.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;

    return { x: x, y: y };
  }
};

var getSizeLimit = function getSizeLimit(currentSize) {
  if (currentSize <= 25) return '25';
  if (currentSize <= 50) return '50';

  return (Math.ceil(currentSize / 100) * 100).toString();
};

var getSizeAccordingToPixelRatio = function getSizeAccordingToPixelRatio(size) {
  var splittedSizes = size.toString().split('x');
  var result = [];

  [].forEach.call(splittedSizes, function (size) {
    result.push(size * Math.round(window.devicePixelRatio || 1));
  });

  return result.join('x');
};

var getResponsiveWidthOfContainer = function getResponsiveWidthOfContainer(width) {
  return getSizeLimit(width);
};

var fit = function fit(contains) {
  return function (parentWidth, parentHeight, childWidth, childHeight) {
    var scale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var offsetX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.5;
    var offsetY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0.5;

    var childRatio = childWidth / childHeight;
    var parentRatio = parentWidth / parentHeight;
    var width = parentWidth * scale;
    var height = parentHeight * scale;

    if (contains ? childRatio > parentRatio : childRatio < parentRatio) {
      height = width / childRatio;
    } else {
      width = height * childRatio;
    }

    return {
      width: width,
      height: height,
      offsetX: (parentWidth - width) * offsetX,
      offsetY: (parentHeight - height) * offsetY
    };
  };
};

var contain = fit(true);

var addClass = function addClass(el, className) {
  if (el.classList) el.classList.add(className);else el.className += ' ' + className;
};

var removeClass = function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

var pad = function pad(n) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  n = n + '';

  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
};

exports.get360ViewProps = get360ViewProps;
exports.set360ViewIconStyles = set360ViewIconStyles;
exports.set360ViewCircleIconStyles = set360ViewCircleIconStyles;
exports.setLoaderStyles = setLoaderStyles;
exports.setBoxShadowStyles = setBoxShadowStyles;
exports.setView360Icon = setView360Icon;
exports.magnify = magnify;
exports.setMagnifyIconStyles = setMagnifyIconStyles;
exports.setFullScreenModalStyles = setFullScreenModalStyles;
exports.setFullScreenIconStyles = setFullScreenIconStyles;
exports.setCloseFullScreenViewStyles = setCloseFullScreenViewStyles;
exports.getResponsiveWidthOfContainer = getResponsiveWidthOfContainer;
exports.getSizeAccordingToPixelRatio = getSizeAccordingToPixelRatio;
exports.contain = contain;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.pad = pad;