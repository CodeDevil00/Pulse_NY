from fastapi import FastAPI
from pydantic import BaseModel

from review_scraper_py import ReviewScraper

app = FastAPI()


class ScrapeRequest(BaseModel):
    company: str
    start: str
    end: str
    source: str


@app.post("/scrape")
def scrape_reviews(payload: ScrapeRequest):
    scraper = ReviewScraper(
        company=payload.company,
        start_date=payload.start,
        end_date=payload.end,
        source=payload.source,
    )
    reviews = scraper.scrape()
    return {
        "company": payload.company,
        "source": payload.source,
        "date_range": {
            "start": payload.start,
            "end": payload.end,
        },
        "total_reviews": len(reviews),
        "reviews": reviews,
    }
