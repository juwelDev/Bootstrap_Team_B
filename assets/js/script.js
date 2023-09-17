const person = [
  {
    id: 1,
    img: "./assets/image/bjsa.avif",
    title: "বাংলাদেশ",
    discription:
      "ইউরোপীয় পার্লামেন্টে প্রস্তাব দেশের বিচার ব্যবস্থার ওপর হস্তক্ষেপের চেষ্টা: বিজেএসএ",
    link: "htmlfile/bangladesh.html",
  },
  {
    id: 1,
    img: "./assets/image/378242316_298362322829732_6322375367558857617_n.avif ",
    title: "স্টার মাল্টিমিডিয়া",
    discription: "নির্দলীয় সরকারের হাতে ক্ষমতা তুলে দিন: মির্জা ফখরুল ",
    link: "./htmlfile/bangadesh.html",
  },
  {
    id: 1,
    img: "./assets/image/dengue-story_ds.avif",
    title: "রোগ",
    discription: "ডেঙ্গুতে ২৪ ঘণ্টায় ১৮ জনের মৃত্যু, হাসপাতালে ৩১২২",
    link: "./htmlfile/bangadesh.html",
  },
  {
    id: 1,
    img: "./assets/image/airlines.avif",
    title: "বাংলাদেশ",
    discription: "৪ বেসরকারি এয়ারলাইনসের কাছে বেবিচকের পাওনা ১২২২ কোটি টাকা",
    link: "./htmlfile/bangadesh.html",
  },
];

let personData = "";
person.forEach(function (item) {
  personData += ` 
  <div class="card m-3 border">
  <img
    src="${item.img}"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">
      ${item.discription}
    </p>
    <a href="${item.link}" class="btn btn-primary">More Details</a>
  </div>
</div> 
`;
});

document.getElementById("row").innerHTML = personData;
