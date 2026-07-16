# 프로젝트 프론트 원격 레포지토리

# 프론트 작업 시작하기 전에
## 작업한 내용이 있는지 없는지
### 작업한 내용이 없다면
### git pull origin master - 원격레포지토리(github) 코드로 최신화(다운로드 같은느낌)
### yarn install - 다른 코더가 yarn add 를 활용하여 외부라이브러리를 끌어온 경우 최신화

## 작업한 내용이 있다면
### git add .
### git commit -m "작업내용"         ( 작업 내용에는 한글, 영어 상관없이 들어갈 수 있습니다 )
### git push origin "브랜치명"  (개인 브랜치명입니다)
### 자신의 브랜치명을 까먹은 경우 : git branch   명령어 실행 후 색깔 표시나는 브랜치가 자신의 브랜치명입니다


## git 관련 명령어 정리
### 깃허브 환경설정 명령어 (CMD에서 사용)
git config --global user.name "계정명" <br>
git config --global user.email "계정가입 이메일" <br>
<img width="800" height="200" alt="image" src="https://github.com/user-attachments/assets/daaaba05-2e86-4a50-806e-4a01fb5b6cdf" /> <br>


### 개인 깃 관련 명령어
git init - git 생성 (clone 받을 경우 불필요) *** <br>
git add . - 작업한 내용 임시저장 ***** <br>
git commit -m "커밋명" - 작업한 내용 저장(커밋) ***** <br>
git branch - 브랜치 확인 명령어 <br>
git branch 브랜치명 - 브랜치 생성 명령어 ***** <br>
git switch 브랜치명 - 브랜치 변경 명령어 ***** <br>
git branch -d 브랜치명 <br>
git remote add origin "깃허브주소" - 원격레포지토리 연결 명령어 *** <br>

### 원격 저장소(github) 관련 명령어
git clone 깃허브주소       - 깃허브주소에 있는 프로젝트 가져오기 ***** <br>
git pull origin "브랜치명" - 연결된 원격 저장소의 브랜치명 내용 가져오기 ***** 하루 작업 시작 전에 반드시 사용 <br>
git push origin "브랜치명" - 연결된 원격 저장소의 브랜치명 내용 변경하기 ***** <br>
<br>
git push origin --delete master - 연결한 원격 레포지토리 삭제 <br>

## 원격 레포지토리를 받는 방법
### git clone "깃허브 주소"
<img width="800" height="800" alt="image" src="https://github.com/user-attachments/assets/a60812db-2313-422e-8656-103a90f4ac4c" />

1. git clone https://github.com/KoreanICT/projectFront.git 을 적당한 파일 위치에서 입력한다
<img width="800" height="230" alt="image" src="https://github.com/user-attachments/assets/631450dd-9a97-4bf5-8578-e2533995c4dc" />
<br>
2. VSCODE 혹은 스프링 부트에서 작업을 시작한다


# 화면 UI 작업 방법
1. clone 받은 폴더(projectfront) VSCODE로 열기
2. git pull origin master 로 최신화된 코드를 받는다 (git push 안했다면 하면 안돼요)
3. 자신이 담당한 코드를 작업한다
4. 코드 작업 이후 터미널창을 연다
<img width="800" height="800" alt="image" src="https://github.com/user-attachments/assets/3a33c323-50af-4368-b2a7-1649c6c96749" />

5. 팀장에게 얘기하고 문제 없으면 git pull origin master로 재반영
6.  3~5를 반복
