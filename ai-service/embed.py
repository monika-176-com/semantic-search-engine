from sentence_transformers import SentenceTransformer
from pymongo import MongoClient

model = SentenceTransformer('all-MiniLM-L6-v2')

client = MongoClient("YOUR_MONGO_URI")
db = client["semantic_db"]
collection = db["documents"]

for doc in collection.find():
    embedding = model.encode(doc["content"]).tolist()
    collection.update_one(
        {"_id": doc["_id"]},
        {"$set": {"embedding": embedding}}
    )

print("Embeddings stored successfully!")