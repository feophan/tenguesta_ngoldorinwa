document.addEventListener("DOMContentLoaded", () => {
    let paragraphCount = 0;
    document.querySelectorAll(".paragraph").forEach((el) => {
      paragraphCount++;
      const chapterNumber = getComputedStyle(el).getPropertyValue("--chapter-number").trim();
      el.id = `${chapterNumber}.${paragraphCount}`;
    });
  });