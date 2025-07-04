export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }


    console.log('Loaded API Key:', process.env.OPENAI_API_KEY);

    const { prompt } = req.body;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a creative assistant that generates startup pitch content.' },
                    { role: 'user', content: `Generate the following for this startup idea: ${prompt}\n\n- Startup name\n- One-liner pitch\n- Tagline\n- Basic feature list\n- Target audience\n- A brand identity color.` }
                ],
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch from OpenAI API');
        }

        const data = await response.json();
        return res.status(200).json({ result: data.choices[0].message.content });

    } catch (error) {
        console.error('API error:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};