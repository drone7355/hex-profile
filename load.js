$(() => {
  $("body").addClass("loaded");
  setTimeout(() => {
    (function typewriter(/** @type {number} */ index) {
      $("[data-typewriter],li,.image")
        .eq(index)
        .each(function () {
          if ($(this).is("li,.image")) $(this).addClass("loaded");

          if ($(this).is("[data-typewriter]")) {
            /**
             * @type {string}
             */
            const text = $(this).data("typewriter").toString();
            const interval = $(this).data("typewriter-interval");
            /**
             * @type {number | undefined}
             */
            let start;

            const step = (/** @type {number} */ timestamp) => {
              if (start === undefined) start = timestamp;

              const i = Math.floor((timestamp - start) / (interval ?? 100));

              $(this).text(text.substring(0, i));

              if (i < text.length) requestAnimationFrame(step);
              else typewriter(index + 1);
            };

            requestAnimationFrame(step);
          } else typewriter(index + 1);
        });
    })(0);
  }, 2000);
});
