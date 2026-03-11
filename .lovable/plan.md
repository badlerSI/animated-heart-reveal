

# Fix: Quiz Questions Vanishing on Language Switch

## Problem
When the language is toggled after quiz questions are visible, `changeLanguage()` calls `renderPanel()` which rebuilds the entire panel HTML. The quiz section is always created with `class="quiz-section locked"` (line 955), so even if all continents were already placed and the quiz was unlocked, it gets re-locked and hidden. Additionally, any already-answered quiz buttons lose their visual state (correct/wrong highlighting).

## Solution
After `renderPanel()` is called inside `changeLanguage()`, restore the quiz state:

1. **Re-unlock the quiz section** if all continents for the current step are already locked in place
2. **Re-apply answered quiz button states** by replaying the `answeredQuizzes` object -- marking chosen answers as correct/wrong
3. **Re-show the continue button** if all questions were already answered
4. **For the exit ticket (step 3)**, re-apply answered states and re-show the score if it was already calculated

## Technical Detail

In `changeLanguage()` (line 1046), after the existing `renderPanel()` call on line 1065, add a call to a new `restoreQuizState()` function that:

- Checks if all continents are locked for the current step; if so, removes "locked" class from `.quiz-section` and shows the success message
- Iterates over `answeredQuizzes` and for each answered question, marks the buttons with `chosen`, `correct`, or `wrong` classes
- If all questions are answered, shows the continue button (steps 0-2) or re-renders the score area (step 3)

### Files Modified
- `public/pangea.html` -- add `restoreQuizState()` function and call it from `changeLanguage()`

