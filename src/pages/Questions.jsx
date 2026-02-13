import { useParams, useNavigate } from "react-router-dom";

const questionData = {
  javascript: [
    "1. What is closure?",
    "2. What is hoisting?",
    "3. What is event loop?",
    "4. Difference between var, let, const?",
    "5. What is promise?",
    "6. What is async/await?",
    "7. What is prototype?",
    "8. What is debounce?",
    "9. What is throttle?",
    "10. What is callback?"
  ],
  html: [
    "1. What is semantic HTML?",
    "2. What is doctype?",
    "3. Difference between div and span?",
    "4. What is SEO?",
    "5. What is accessibility?",
    "6. What is meta tag?",
    "7. What is iframe?",
    "8. What is localStorage?",
    "9. What is viewport?",
    "10. What is form validation?"
  ],
  css: [
    "1. What is box model?",
    "2. What is flexbox?",
    "3. What is grid?",
    "4. What is specificity?",
    "5. What is z-index?",
    "6. What is media query?",
    "7. Difference between relative & absolute?",
    "8. What is pseudo class?",
    "9. What is animation?",
    "10. What is transition?"
  ],
  react: [
    "1. What is JSX?",
    "2. What is virtual DOM?",
    "3. What is useState?",
    "4. What is useEffect?",
    "5. What is props?",
    "6. What is context API?",
    "7. What is memo?",
    "8. What is key in list?",
    "9. What is controlled component?",
    "10. What is lifecycle?"
  ],
  angular: [
    "1. What is Angular?",
    "2. What is component?",
    "3. What is directive?",
    "4. What is service?",
    "5. What is dependency injection?",
    "6. What is module?",
    "7. What is pipe?",
    "8. What is two-way binding?",
    "9. What is RxJS?",
    "10. What is zone.js?"
  ]
};

function Questions() {
  const { tech } = useParams();
  const navigate = useNavigate();

  const questions = questionData[tech] || [];

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <h2 style={{ marginTop: "20px" }}>
        {tech.toUpperCase()} Top 10 Questions
      </h2>

      <ul>
        {questions.map((q, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
