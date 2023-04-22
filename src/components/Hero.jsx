import React from 'react';

import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="sumz_logo"
          className="w-16 sm:w-28 object-contain cursor-pointer"
        />

        <button
          type="button"
          onClick={() =>
            window.open(
              'https://github.com/csalam07/ai-blog-summerizer',
              '_blank',
            )
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify the process of reading lengthy articles with Summize, an
        open-source article summarizer that uses OpenAI GPT-4 to transform them
        into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
