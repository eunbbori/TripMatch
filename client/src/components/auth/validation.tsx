const checkAuthNumber = (
  confirmPassword: string,
  password: string,
  validTextPassword: string,
) => {
  if (password === "") {
    return "위의 비밀번호부터 입력해주세요";
  } else if (validTextPassword !== "사용가능한 비밀번호 입니다") {
    return "사용할 수 없는 비밀번호 입니다";
  } else if (confirmPassword === "") {
    return "위의 비밀번호를 다시 한 번 입력해주세요";
  } else if (confirmPassword !== password) {
    return "입력하신 비밀번호와 일치하지 않습니다";
  } else {
    return "비밀번호 확인이 완료되었습니다";
  }
};

const checkNickname = (nickname: string) => {
  const space = nickname.search(/\s/);
  const special = nickname.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (nickname.length < 2 || nickname.length > 8) {
    return "2자 이상, 8자 이하로 입력해주세요";
  } else if (space !== -1) {
    return "닉네임은 공백을 사용할 수 없습니다";
  } else if (special !== -1) {
    return "닉네임에 특수문자는 사용할 수 없습니다";
  } else {
    return "사용가능한 닉네임 입니다";
  }
};

const checkPassword = (password: string) => {
  const num = password.search(/[0-9]/g);
  const eng = password.search(/[a-z]/gi);
  const space = password.search(/\s/);
  const special = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  if (password.length < 8 || password.length > 20) {
    return "8자리 ~ 20자리 이내로 입력해주세요";
  } else if (space !== -1) {
    return "비밀번호에 공백은 사용할 수 없습니다";
  } else if (num < 0 || eng < 0 || special < 0) {
    return "영문,숫자, 특수문자를 혼합하여 입력해주세요";
  } else {
    return "사용할 수 있는 비밀번호입니다";
  }
};

const checkConfirmPassword = (
  confirmPassword: string,
  password: string,
  validTextPassword: string,
) => {
  if (password === "") {
    return "위의 비밀번호부터 입력해주세요";
  } else if (validTextPassword !== "사용할 수 있는 비밀번호입니다") {
    return "사용할 수 없는 비밀번호 입니다";
  } else if (confirmPassword === "") {
    return "위의 비밀번호를 다시 한 번 입력해주세요";
  } else if (confirmPassword !== password) {
    return "입력하신 비밀번호와 일치하지 않습니다";
  } else {
    return "비밀번호 확인이 완료되었습니다";
  }
};

const checkIntroduce = (introduce: string) => {
  if (introduce.length > 100) {
    return "100글자 이내로 작성해주세요";
  } else if (introduce === "") {
    return "자기소개를 꼭 입력해주세요!";
  } else {
    return "SNS 계정을 적어주시면 상대방의 동행 수락 가능성이 높아집니다 :)";
  }
};

export {
  checkAuthNumber,
  checkNickname,
  checkPassword,
  checkConfirmPassword,
  checkIntroduce,
};
