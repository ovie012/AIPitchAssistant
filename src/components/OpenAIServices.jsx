export async function generatePitch(userIdea) {
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: userIdea })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch from API route');
        }

        const data = await response.json();
        return data.result;

    } catch (error) {
        console.error('Error calling backend:', error);
        throw error;
    }
};


// export async function generatePitch(userIdea) {
//   try {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           { role: "system", content: "You are a creative assistant that generates startup pitch content." },
//           { role: "user", content: `Generate the following for this startup idea: ${userIdea}\n\n- Startup name\n- One-liner pitch\n- Tagline\n- Basic feature list\n- Target audience\n- A brand identity color.` }
//         ],
//         temperature: 0.7,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch from OpenAI API');
//     }

//     const data = await response.json();
//     return data.choices[0].message.content;

//   } catch (error) {
//     console.error('Error calling OpenAI:', error);
//     return 'An error occurred while generating the pitch.';
//   }
// }