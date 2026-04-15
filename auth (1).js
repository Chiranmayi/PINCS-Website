let siTimer;

function startCountdown(prefix) {
  let timeLeft = 30;
  const countEl = document.getElementById(prefix + "-countdown");
  const timerEl = document.getElementById(prefix + "-timer");
  const resendEl = document.getElementById(prefix + "-resend");

  if (!countEl || !timerEl || !resendEl) {
    return;
  }

  timerEl.style.display = "block";
  resendEl.style.display = "none";
  countEl.textContent = timeLeft;
  clearInterval(siTimer);

  siTimer = setInterval(() => {
    timeLeft -= 1;
    countEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(siTimer);
      timerEl.style.display = "none";
      resendEl.style.display = "block";
    }
  }, 1000);
}

function resendOTP(prefix) {
  startCountdown(prefix);
  const input = document.getElementById(prefix + "-otp-single");
  if (input) {
    input.value = "";
    input.focus();
  }
  alert("OTP resent! (Demo)");
}

function resetSignIn() {
  const step1 = document.getElementById("si-step1");
  const step2 = document.getElementById("si-step2");
  const phone = document.getElementById("si-phone");
  const otp = document.getElementById("si-otp-single");
  if (step1) step1.style.display = "block";
  if (step2) step2.style.display = "none";
  if (phone) phone.value = "";
  if (otp) otp.value = "";
  clearInterval(siTimer);
}

function sendSignInOTP() {
  const phoneEl = document.getElementById("si-phone");
  const phoneDisplay = document.getElementById("si-phone-display");
  const step1 = document.getElementById("si-step1");
  const step2 = document.getElementById("si-step2");
  const otp = document.getElementById("si-otp-single");

  if (!phoneEl || !phoneDisplay || !step1 || !step2 || !otp) {
    return;
  }

  const phone = phoneEl.value.trim();
  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
  }

  phoneDisplay.textContent = "+91 " + phone;
  step1.style.display = "none";
  step2.style.display = "block";
  startCountdown("si");
  setTimeout(() => otp.focus(), 100);
}

function verifySignInOTP() {
  const otpEl = document.getElementById("si-otp-single");
  if (!otpEl) {
    return;
  }

  const otp = otpEl.value.trim();
  if (otp.length < 6) {
    alert("Please enter the full 6-digit OTP.");
    return;
  }

  alert("Sign In successful! (Demo — OTP: " + otp + ")");
  window.location.href = "./landing.html";
}

function goBackStep(prefix) {
  if (prefix !== "si") {
    return;
  }

  const step1 = document.getElementById("si-step1");
  const step2 = document.getElementById("si-step2");
  if (step1) step1.style.display = "block";
  if (step2) step2.style.display = "none";
  clearInterval(siTimer);
}

function showToast(name) {
  const toast = document.getElementById("toast");
  if (!toast) {
    return;
  }

  toast.querySelector("strong").textContent = "Account Created!";
  toast.querySelector("span").textContent = "Welcome to PINCS, " + name + "!";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

function createAccount() {
  const nameEl = document.getElementById("su-name");
  const emailEl = document.getElementById("su-email");

  if (!nameEl || !emailEl) {
    return;
  }

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();

  if (!name) {
    alert("Please enter your full name.");
    return;
  }
  if (!email || !email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  nameEl.value = "";
  emailEl.value = "";
  showToast(name);
  setTimeout(() => {
    window.location.href = "./signin.html";
  }, 900);
}
