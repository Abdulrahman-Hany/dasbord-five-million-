document.addEventListener("DOMContentLoaded", function () {
  // Handle tab switching and update inputs based on active tab
  let lessonTabs = document.querySelectorAll(".lesson-tabs .lesson-tab");
  let summaryInputOne = document.querySelector(".summary-input.one");
  let summaryInputTwo = document.querySelector(".summary-input.two");
  let addCourse = document.querySelector(
    ".add-course-content-new-course.two.last"
  );

  // Update inputs based on the active tab
  lessonTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      lessonTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Show or hide inputs based on selected tab
      if (this.classList.contains("one")) {
        summaryInputOne.classList.remove("active");
        summaryInputTwo.classList.remove("active");
        addCourse.classList.remove("active");
      } else if (this.classList.contains("two")) {
        summaryInputOne.classList.add("active");
        summaryInputTwo.classList.add("active");
        addCourse.classList.remove("active");
      } else if (this.classList.contains("three")) {
        summaryInputOne.classList.add("active");
        summaryInputTwo.classList.remove("active");
        addCourse.classList.add("active");
      }
    });
  });

  // Handle 'edit' actions
  let actionsEdit = document.querySelectorAll(".actions .edit");
  const bluersTwo = document.querySelectorAll(".bluer-two");
  const cancelBtnReply = document.querySelectorAll(".cancel-btn-reply");
  const complaintResponseReplie = document.querySelector(
    ".complaint-response-reply-two"
  );
  const complaintresponsereplyquestion = document.querySelector(
    ".complaint-response-reply-question"
  );
  const userInfoReplies = document.querySelectorAll(
    ".user-info-reply .user-icon-reply.close"
  );

  actionsEdit.forEach((edit) => {
    edit.addEventListener("click", (event) => {
      event.stopPropagation();
      bluersTwo.forEach((bluer) => {
        bluer.classList.toggle("active");
      });
      complaintResponseReplie.classList.toggle("active");
    });
  });

  // Close complaint response when clicking outside
  document.addEventListener("click", (event) => {
    if (!complaintResponseReplie.contains(event.target)) {
      bluersTwo.forEach((bluer) => {
        bluer.classList.remove("active");
      });
      complaintResponseReplie.classList.remove("active");
    }
  });

  // Close complaint response on cancel button or user icon click
  userInfoReplies.forEach((userInfoReply) => {
    userInfoReply.addEventListener("click", () => {
      complaintResponseReplie.classList.remove("active");
      bluersTwo.forEach((bluer) => {
        bluer.classList.remove("active");
      });
    });
  });

  cancelBtnReply.forEach((userInfoReplyy) => {
    userInfoReplyy.addEventListener("click", () => {
      complaintResponseReplie.classList.remove("active");
      bluersTwo.forEach((bluer) => {
        bluer.classList.remove("active");
      });
    });
  });

  // Manage visibility for complaint responses in tab three
  const complaintResponseReplieThree = document.querySelector(
    ".complaint-response-reply-three"
  );
  let arrowRight = document.querySelector(".arrow-right");
  let lessontabthree = document.querySelector(".lesson-tab.three");
  const cancelBtnReplyThreess = document.querySelectorAll(".cancel-btn-reply");

  // Toggle complaint response question on cancel button click
  cancelBtnReplyThreess.forEach((btn) => {
    btn.addEventListener("click", () => {
      complaintresponsereplyquestion.classList.toggle("active");
      complaintresponsereplyquestion.classList.remove("active");
    });
  });

  // Toggle visibility for complaint response in tab three
  lessontabthree.addEventListener("click", () => {
    complaintResponseReplieThree.classList.toggle("active");
    complaintresponsereplyquestion.classList.toggle("active");
  });

  // Toggle visibility for complaint response on arrow click
  arrowRight.addEventListener("click", () => {
    complaintResponseReplieThree.classList.toggle("active");
    complaintresponsereplyquestion.classList.remove("active");
  });
});

/* ===========> Bage UserManagement <============ */
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("DOMContentLoaded", function () {
    // Handle tab switching and update inputs based on active tab
    let lessonTabs = document.querySelectorAll(".lesson-tabs .lesson-tab");
    let summaryInputOne = document.querySelector(".summary-input.one");
    let summaryInputTwo = document.querySelector(".summary-input.two");
    let addCourse = document.querySelector(
      ".add-course-content-new-course.two.last"
    );

    // Update inputs based on the active tab
    lessonTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        lessonTabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        // Show or hide inputs based on selected tab
        if (this.classList.contains("one")) {
          summaryInputOne.classList.remove("active");
          summaryInputTwo.classList.remove("active");
          addCourse.classList.remove("active");
        } else if (this.classList.contains("two")) {
          summaryInputOne.classList.add("active");
          summaryInputTwo.classList.add("active");
          addCourse.classList.remove("active");
        } else if (this.classList.contains("three")) {
          summaryInputOne.classList.add("active");
          summaryInputTwo.classList.remove("active");
          addCourse.classList.add("active");
        }
      });
    });

    // Handle 'edit' actions
    let actionsEdit = document.querySelectorAll(".actions .edit");
    const bluersTwo = document.querySelectorAll(".bluer-two");
    const cancelBtnReply = document.querySelectorAll(".cancel-btn-reply");
    const complaintResponseReplie = document.querySelector(
      ".complaint-response-reply-two"
    );
    const complaintresponsereplyquestion = document.querySelector(
      ".complaint-response-reply-question"
    );
    const userInfoReplies = document.querySelectorAll(
      ".user-info-reply .user-icon-reply.close"
    );

    actionsEdit.forEach((edit) => {
      edit.addEventListener("click", (event) => {
        event.stopPropagation();
        bluersTwo.forEach((bluer) => {
          bluer.classList.toggle("active");
        });
        complaintResponseReplie.classList.toggle("active");
      });
    });

    // Close complaint response when clicking outside
    document.addEventListener("click", (event) => {
      if (!complaintResponseReplie.contains(event.target)) {
        bluersTwo.forEach((bluer) => {
          bluer.classList.remove("active");
        });
        complaintResponseReplie.classList.remove("active");
      }
    });

    // Close complaint response on cancel button or user icon click
    userInfoReplies.forEach((userInfoReply) => {
      userInfoReply.addEventListener("click", () => {
        complaintResponseReplie.classList.remove("active");
        bluersTwo.forEach((bluer) => {
          bluer.classList.remove("active");
        });
      });
    });

    cancelBtnReply.forEach((userInfoReplyy) => {
      userInfoReplyy.addEventListener("click", () => {
        complaintResponseReplie.classList.remove("active");
        bluersTwo.forEach((bluer) => {
          bluer.classList.remove("active");
        });
      });
    });

    // Manage visibility for complaint responses in tab three
    const complaintResponseReplieThree = document.querySelector(
      ".complaint-response-reply-three"
    );
    let arrowRight = document.querySelector(".arrow-right");
    let lessontabthree = document.querySelector(".lesson-tab.three");
    const cancelBtnReplyThreess =
      document.querySelectorAll(".cancel-btn-reply");

    // Toggle complaint response question on cancel button click
    cancelBtnReplyThreess.forEach((btn) => {
      btn.addEventListener("click", () => {
        complaintresponsereplyquestion.classList.toggle("active");
        complaintresponsereplyquestion.classList.remove("active");
      });
    });

    // Toggle visibility for complaint response in tab three
    lessontabthree.addEventListener("click", () => {
      complaintResponseReplieThree.classList.toggle("active");
      complaintresponsereplyquestion.classList.toggle("active");
    });

    // Toggle visibility for complaint response on arrow click
    arrowRight.addEventListener("click", () => {
      complaintResponseReplieThree.classList.toggle("active");
      complaintresponsereplyquestion.classList.remove("active");
    });
  });
});

/* ===========> Bage UserManagement <============ */

const allSvg = document.querySelectorAll(".all-svg");
const userActions = document.querySelectorAll(".user-actions");

allSvg.forEach((svg) => {
  svg.addEventListener("click", () => {
    userActions.forEach((action) => {
      action.classList.toggle("active");
    });
  });
});

const actionItemEditUser = document.querySelector(".action-item.edit-user");
const actionItemBlockUser = document.querySelector(".action-item.block-user");
const actionItemDeleteUser = document.querySelector(".action-item.delete-user");
const actionEditContainerUser = document.querySelector(
  ".user-edit-container-edit"
);
const banModalBlock = document.querySelector(".ban-modal-block");
const banModalDelet = document.querySelector(".ban-modal-delet");
const bluersTwo = document.querySelectorAll(".bluer");
const userInfoRepliesclose = document.querySelectorAll(
  ".header-section-edit .user-icon-reply.close"
);
const cancelBtnReplyy = document.querySelectorAll(".cancel-btn-reply");

actionItemEditUser.addEventListener("click", () => {
  userActions.forEach((action) => {
    action.classList.remove("active");
  });
  bluersTwo.forEach((bluer) => {
    bluer.classList.add("active");
  });
  actionEditContainerUser.classList.add("active");
});

actionItemBlockUser.addEventListener("click", () => {
  userActions.forEach((action) => {
    action.classList.remove("active");
  });
  banModalBlock.classList.add("active");
  bluersTwo.forEach((bluer) => {
    bluer.classList.add("active");
  });
});
actionItemDeleteUser.addEventListener("click", () => {
  userActions.forEach((action) => {
    action.classList.remove("active");
  });
  banModalDelet.classList.add("active");
  bluersTwo.forEach((bluer) => {
    bluer.classList.add("active");
  });
});

// Close complaint response on cancel button or user icon click
userInfoRepliesclose.forEach((userInfoReplye) => {
  userInfoReplye.addEventListener("click", () => {
    actionEditContainerUser.classList.remove("active");
    bluersTwo.forEach((bluer) => {
      bluer.classList.remove("active");
    });
  });
});

cancelBtnReplyy.forEach((userInfoReplyy) => {
  userInfoReplyy.addEventListener("click", () => {
    actionEditContainerUser.classList.remove("active");
    banModalBlock.classList.remove("active");
    banModalDelet.classList.remove("active");
    bluersTwo.forEach((bluer) => {
      bluer.classList.remove("active");
    });
  });
});
const complaintResponseNotification = document.querySelector(
  ".complaint-response-reply-notification"
);
const complaintResponseMessages = document.querySelector(
  ".complaint-response-reply-Messages"
);

actionItemEditUser.addEventListener("click", () => {
  userActions.forEach((action) => {
    action.classList.remove("active");
  });
  bluersTwo.forEach((bluer) => {
    bluer.classList.add("active");
  });
  complaintResponseNotification.classList.add("active");
});

actionItemBlockUser.addEventListener("click", () => {
  userActions.forEach((action) => {
    action.classList.remove("active");
  });
  bluersTwo.forEach((bluer) => {
    bluer.classList.add("active");
  });
  complaintResponseMessages.classList.add("active");
});

cancelBtnReplyy.forEach((userInfoReplyy) => {
  userInfoReplyy.addEventListener("click", () => {
    complaintResponseNotification.classList.remove("active");
    bluersTwo.forEach((bluer) => {
      bluer.classList.remove("active");
    });
  });
});
cancelBtnReplyy.forEach((userInfoReplyy) => {
  userInfoReplyy.addEventListener("click", () => {
    complaintResponseMessages.classList.remove("active");
    bluersTwo.forEach((bluer) => {
      bluer.classList.remove("active");
    });
  });
});
const userInfoRepliescloss = document.querySelectorAll(
  ".user-icon-reply.close"
);
// Close complaint response on cancel button or user icon click
userInfoRepliescloss.forEach((userInfoReplyclose) => {
  userInfoReplyclose.addEventListener("click", () => {
    complaintResponseNotification.classList.remove("active");
    bluersTwo.forEach((bluer) => {
      bluer.classList.remove("active");
    });
  });
});
// Close complaint response on cancel button or user icon click
userInfoRepliescloss.forEach((userInfoReplyclose) => {
  userInfoReplyclose.addEventListener("click", () => {
    complaintResponseMessages.classList.remove("active");
    bluersTwo.forEach((bluer) => {
      bluer.classList.remove("active");
    });
  });
});
const complaintResponseMessagesS = document.querySelector(
  ".complaint-response-reply-MessagesS"
);
const actionItemDeleteUserr = document.querySelector(".action-item.delete-user");
actionItemDeleteUserr.addEventListener("click", () => {
  userActions.forEach((action) => {
    action.classList.remove("active");
  });
  complaintResponseMessagesS.classList.toggle("active");
  bluersTwo.forEach((bluer) => {
    bluer.classList.add("active");
  });
});

// Close complaint response on cancel button or user icon click
userInfoRepliescloss.forEach((userInfoReplyclose) => {
  userInfoReplyclose.addEventListener("click", () => {
    complaintResponseMessagesS.classList.remove("active");
    bluersTwo.forEach((bluer) => {
      bluer.classList.remove("active");
    });
  });
});