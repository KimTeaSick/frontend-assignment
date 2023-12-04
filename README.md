ruby 버전 오류로 rbenv install 후 native install<br />

전에 네이티브를 사용한 프로젝트에서도 개발 환경 조성에서 제일 많은 어려움을 겪어 하루에 한 번 캐시 삭제 후 빌드를 시도 <br />

UI에 대한 의존성을 낮추기 위해 Headless 컴포넌트 기법을 사용, Button, Input, Toast등이 Headless로 제작. <br />

인풋 넘어가도록 텍스트가 이어지는 에러 -> View컴포넌트로 input를 감싸고 View에 overflow hidden을 걸어준다. <br />

scrollView가 작동하지 않는 에러 -> 부모 컴포넌트가 TouchableWithoutFeedback 여서 스크롤이 되지 않은 현상이었다. 디자인을 따라 UI를 변경하면서 해결<br />

progress 바 %문제 해결 -> native Dimensions으로 기기의 가로 값을 구한 뒤 퍼센트를 계산해줬다. <br />
