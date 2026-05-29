const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.json({
        name: 'JS Summary API',
        version: '1.0.0',
        endpoints: {
            '/api/summarize': 'POST - Summarize text',
            '/api/health': 'GET - Health check'
        }
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Summarize endpoint
app.post('/api/summarize', (req, res) => {
    const { text, maxLength } = req.body;
    
    // Validation
    if (!text) {
        return res.status(400).json({ 
            error: 'Missing required field: text' 
        });
    }
    
    // Simple summarization logic
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const maxSentences = maxLength || 3;
    const summary = sentences.slice(0, maxSentences).join('. ') + '.';
    
    // Word count
    const wordCount = text.split(/\s+/).length;
    const summaryWordCount = summary.split(/\s+/).length;
    
    res.json({
        original_length: text.length,
        original_sentences: sentences.length,
        original_words: wordCount,
        summary: summary,
        summary_sentences: Math.min(maxSentences, sentences.length),
        summary_words: summaryWordCount,
        compression_ratio: ((1 - summaryWordCount / wordCount) * 100).toFixed(1) + '%'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});