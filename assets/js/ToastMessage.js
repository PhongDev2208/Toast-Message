function ShowToast({
  title = "Thành công",
  message = "Dữ liệu đã gửi thành công",
  type = "success",
  duration = 3000,
}) {
  const icons = {
    success: "fa-solid fa-check",
    info: "fa-sharp fa-solid fa-circle-exclamation",
    warning: "fa-solid fa-triangle-exclamation",
    error: "fa-solid fa-triangle-exclamation",
  };
  const toastWrapper = document.getElementById("toast");

  if (toastWrapper) {
    const toast = document.createElement("div");
    toast.classList.add("toast", `toast--${type}`);

    toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icons[type]}"></i>
       </div>
       <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__message">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa-regular fa-circle-xmark"></i>
        </div>`;
    toastWrapper.appendChild(toast);
    const delay = (duration / 1000).toFixed(2);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    const autoRemove = setTimeout(() => {
      toastWrapper.removeChild(toast);
    }, duration + 1300);

    toast.onclick = (e) => {
      if (e.target.closest(".toast__close")) {
        clearTimeout(autoRemove);
        toastWrapper.removeChild(toast);
      }
    };
  }
}

function showToastSuccess(message) {
  if (arguments.length) {
    ShowToast({
      title: "Success",
      message: message,
      type: "success",
      duration: 3000,
    });
  } else
    ShowToast({
      title: "Success",
      message: "Data has been successfully sent",
      type: "success",
      duration: 3000,
    });
}

function showToastError(message) {
  if (arguments.length) {
    ShowToast({
      title: "Error",
      message: message,
      type: "error",
      duration: 3000,
    });
  }
    ShowToast({
      title: "Error",
      message: "Data sent to unsuccessful",
      type: "error",
      duration: 3000,
    });
}

function showToastInfo(message) {
  if (arguments.length) {
    ShowToast({
      title: "Infomation",
      message: message,
      type: "info",
      duration: 3000,
    });
  }
    ShowToast({
      title: "Infomation",
      message: "Data existed",
      type: "info",
      duration: 3000,
    });
}

function showToastWarning(message) {
  if(arguments.length) {
    ShowToast({
      title: "Warning",
      message: message,
      type: "warning",
      duration: 3000,
    });
  }
  ShowToast({
    title: "Warning",
    message: "Internet connection is not stable",
    type: "warning",
    duration: 3000,
  });
}
