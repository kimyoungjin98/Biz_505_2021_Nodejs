const form_data_send = async () => {
  const form = document.querySelector("form");
  const form_data = new FormData(form);

  // FormData에서 input 요소(Entries)만 추출하여
  // 별도의 객체로 생성
  const entries_data = Obejct.fromEntries(form_data.entries());

  const fetch_option = {
    method: "POST",
    body: JSON.stringify(entries_data),
    header: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch("/bbs/write", fetch_option);
  const result = await res.json();
  console.log(result);
};
