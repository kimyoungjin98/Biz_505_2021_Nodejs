document.addEventListener("DOMContentLoaded", () => {
  const main_section = document.querySelector("section.main");

  // section.main이 없는 page에서 script 오류가 나는 것을 방지하기 위하여
  if (main_section) {
    main_section.addEventListener("click", (e) => {
      const target = e.target;

      // index.pug의 table layout click 설정
      if (target.tagName === "DIV" && target.className.includes("table")) {
        const table_id = target.dataset.table_id;
        document.location.href = `/pos/order/${table_id}`;
      }
    });
  }
});
