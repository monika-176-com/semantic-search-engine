from fastapi import FastAPI
from sentence_transformers import SentenceTransformer
from pymongo import MongoClient
import numpy as np

app = FastAPI()

model = SentenceTransformer('all-MiniLM-L6-v2')

client = MongoClient("YOUR_MONGO_URI")
db = client["semantic_db"]
collection = db["documents"]

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

@app.post("/search")
def search(query: str):
    query_embedding = model.encode(query)

    results = []
    for doc in collection.find():
        score = cosine_similarity(query_embedding, doc["embedding"])
        results.append({
            "title": doc["title"],
            "content": doc["content"],
            "score": float(score)
        })

    results = sorted(results, key=lambda x: x["score"], reverse=True)
    return results[:5]