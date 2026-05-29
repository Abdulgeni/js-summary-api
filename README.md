# JS Summary API

REST API built with Node.js and Express that summarizes text.

## 🚀 Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API info |
| GET | `/api/health` | Health check |
| POST | `/api/summarize` | Summarize text |

## ⚡ Usage

```bash
curl -X POST http://localhost:3000/api/summarize \
  -H "Content-Type: application/json" \
  -d '{"text": "Your text here. More sentences. Even more.", "maxLength": 2}'
