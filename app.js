const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const overlayImage = document.getElementById('overlay-image');
const captureBtn = document.getElementById('capture-btn');
const previewContainer = document.getElementById('preview-container');
const capturedImage = document.getElementById('captured-image');
const closeBtn = document.getElementById('close-btn');
const imageInput = document.getElementById('image-input');
const shutterSound = document.getElementById('shutter-sound');
const closeTabBtn = document.getElementById('close-tab');
const rotateOverlayBtn = document.getElementById('rotate-overlay');

let overlayScale = 1;
let overlayStartDistance = 0;
let overlayX = 0;
let overlayY = 0;
let isDragging = false;
let startX, startY;

let currentOverlayIndex = 0;
const overlays = ['images/default-overlay.png', 'images/default-overlay1.png'];

// カメラの初期化
const constraints = {
  video: {
    facingMode: 'environment'
  }
};

navigator.mediaDevices.getUserMedia(constraints)
  .then(stream => {
    video.srcObject = stream;
    video.play();
  })
  .catch(err => console.error(err));

// 写真の撮影
captureBtn.addEventListener('click', () => {
  // 撮影処理は省略
});

// プレビューを閉じる
closeBtn.addEventListener('click', () => {
  previewContainer.style.display = 'none';
});

// 画像のオーバーレイ
imageInput.addEventListener('change', (event) => {
  // 画像のオーバーレイ処理は省略
});

// ピンチ操作のイベントリスナー
overlayImage.addEventListener('touchstart', handleTouchStart, false);
overlayImage.addEventListener('touchmove', handleTouchMove, false);
overlayImage.addEventListener('touchend', handleTouchEnd, false);

// ドラッグ操作のイベントリスナー
overlayImage.addEventListener('touchstart', handleDragStart, false);
overlayImage.addEventListener('touchmove', handleDragMove, false);
overlayImage.addEventListener('touchend', handleDragEnd, false);

// ピンチ操作の開始
function handleTouchStart(event) {
  // ピンチ操作の開始処理は省略
}

// ピンチ操作の移動
function handleTouchMove(event) {
  // ピンチ操作の移動処理は省略
}

// ピンチ操作の終了
function handleTouchEnd(event) {
  // ピンチ操作の終了処理は省略
}

// ドラッグ操作の開始
function handleDragStart(event) {
  // ドラッグ操作の開始処理は省略
}

// ドラッグ操作の移動
function handleDragMove(event) {
  // ドラッグ操作の移動処理は省略
}

// ドラッグ操作の終了
function handleDragEnd(event) {
  isDragging = false;
}

// 2点間の距離を計算
function getDistance(touch1, touch2) {
  const x = touch1.clientX - touch2.clientX;
  const y = touch1.clientY - touch2.clientY;
  return Math.sqrt(x * x + y * y);
}

// タブを閉じる
closeTabBtn.addEventListener('click', () => {
  window.close();
});

// オーバーレイ画像を切り替える
rotateOverlayBtn.addEventListener('click', () => {
  currentOverlayIndex = (currentOverlayIndex + 1) % overlays.length;
  overlayImage.src = overlays[currentOverlayIndex];
});
