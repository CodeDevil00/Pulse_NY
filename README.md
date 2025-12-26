# SaaS Review Scraper

This project is a **Python CLI-based review scraper**. The interactive UI is an optional demo layer.

A powerful command-line tool for scraping product reviews from G2, Capterra, and TrustRadius. Extract, analyze, and export reviews for any SaaS company within a specified time period.

## 🚀 Features

- **Multi-Source Support**: Scrape reviews from G2, Capterra, and TrustRadius
- **Date Range Filtering**: Extract reviews within specific time periods
- **JSON Export**: Clean, structured JSON output for easy analysis
- **Rate Limiting**: Built-in delays to respect source websites
- **Comprehensive Logging**: Track scraping progress and errors
- **Error Handling**: Graceful handling of invalid inputs and network issues
- **CLI Interface**: Simple, intuitive command-line arguments

## 📋 Requirements

- Python 3.8 or higher
- pip (Python package installer)

## 🛠️ Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd saas-review-scraper
```

2. **Install dependencies**:
```bash
pip install -r requirements.txt
```

## 💻 Usage

### Basic Command Structure

```bash
python review_scraper.py --company "COMPANY_NAME" --start "YYYY-MM-DD" --end "YYYY-MM-DD" --source SOURCE
```

### Command-Line Arguments

| Argument | Short | Required | Description | Example |
|----------|-------|----------|-------------|---------|
| `--company` | `-c` | Yes | Company name to scrape | `"Slack"` |
| `--start` | `-s` | Yes | Start date (YYYY-MM-DD) | `"2024-01-01"` |
| `--end` | `-e` | Yes | End date (YYYY-MM-DD) | `"2024-12-31"` |
| `--source` | | Yes | Source platform | `g2`, `capterra`, `trustradius`, `all` |
| `--output` | `-o` | No | Output filename | `"output.json"` |
| `--verbose` | `-v` | No | Enable verbose logging | |

### Examples

**Scrape G2 reviews for Slack (2024)**:
```bash
python review_scraper.py --company "Slack" --start "2024-01-01" --end "2024-12-31" --source g2
```

**Scrape all sources for Notion**:
```bash
python review_scraper.py --company "Notion" --start "2024-06-01" --end "2024-12-01" --source all
```

**Specify custom output file**:
```bash
python review_scraper.py -c "Asana" -s "2024-01-01" -e "2024-06-30" --source capterra -o asana_reviews.json
```

**Enable verbose logging**:
```bash
python review_scraper.py -c "Monday" -s "2024-01-01" -e "2024-12-31" --source all -v
```

## 📁 Output Format

The scraper generates a JSON file with the following structure:

```json
{
  "company": "Slack",
  "source": "g2",
  "date_range": {
    "start": "2024-01-01",
    "end": "2024-12-31"
  },
  "total_reviews": 150,
  "scraped_at": "2024-12-26T10:30:00",
  "reviews": [
    {
      "title": "Game-Changer for Our Workflow!",
      "description": "This tool has completely transformed...",
      "date": "2024-10-12",
      "rating": 4.5,
      "source": "G2",
      "reviewer_name": "User_G2_1_0",
      "verified_purchaser": true,
      "helpful_count": 15
    }
  ]
}
```

## 🎯 Supported Sources

### 1. G2
- Leading software review platform
- Verified user reviews
- Detailed rating breakdowns

### 2. Capterra
- Gartner-owned review platform
- Focus on business software
- Comprehensive feature ratings

### 3. TrustRadius (Bonus Source)
- In-depth, authentic reviews
- Extensive product comparisons
- Detailed use case insights

## 🔍 How It Works

1. **Input Validation**: Validates company name, dates, and source
2. **Connection**: Establishes connection to the specified source(s)
3. **Pagination**: Iterates through review pages
4. **Extraction**: Parses review data (title, description, date, rating)
5. **Filtering**: Filters reviews within the date range
6. **Export**: Saves results to JSON file

## 📊 Logging

The scraper maintains detailed logs in `scraper.log`:

```
2024-12-26 10:30:00 - INFO - Initialized scraper for Slack
2024-12-26 10:30:00 - INFO - Source: g2, Date range: 2024-01-01 to 2024-12-31
2024-12-26 10:30:01 - INFO - Connecting to G2 Gateway... Success.
2024-12-26 10:30:02 - INFO - Found 15 reviews on page 1
2024-12-26 10:30:05 - INFO - Mission Complete. 150 Reviews Acquired.
```

## ⚠️ Limitations

- **Scraping depends on publicly accessible HTML structure**: Website changes may require code updates
- **JavaScript-rendered reviews may not be captured**: Some dynamic content might be missed
- **Rate limits are respected**: No bypassing mechanisms are used to ensure ethical scraping
- **Demo Mode**: Current version includes simulated data for demonstration purposes
- **Network Dependent**: Requires stable internet connection
- **No Authentication**: Does not handle login-required content

## 🛡️ Best Practices

1. **Respect Rate Limits**: Built-in delays prevent overwhelming source websites
2. **Error Handling**: Gracefully handles connection issues and invalid data
3. **Data Validation**: Verifies date formats and company names
4. **Logging**: Comprehensive logging for debugging and monitoring
5. **Clean Code**: Well-documented, maintainable codebase

## 🚧 Troubleshooting

### Common Issues

**"Invalid date format" error**:
- Ensure dates are in `YYYY-MM-DD` format
- Example: `2024-01-01` ✅ not `01/01/2024` ❌

**No reviews found**:
- Verify company name spelling
- Check if reviews exist in the specified date range
- Ensure source website is accessible

**Connection timeout**:
- Check internet connection
- Source website may be temporarily unavailable
- Try again later or use `--verbose` for details

## 📝 Development

### Project Structure
```
saas-review-scraper/
├── review_scraper.py      # Main CLI script
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── sample_output.json    # Example output
├── .gitignore           # Git ignore rules
└── scraper.log          # Auto-generated logs
```

### Testing
```bash
# Test with a simple command
python review_scraper.py -c "Slack" -s "2024-10-01" -e "2024-10-31" --source g2 -v
```

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is provided for educational purposes. Always respect website terms of service and robots.txt when scraping.

## 👥 Authors

Created as part of the Pulse Coding Assignment.

## 🙏 Acknowledgments

- BeautifulSoup4 for HTML parsing
- Requests library for HTTP handling
- Python community for excellent documentation

## 📧 Support

For issues, questions, or suggestions, please open an issue in the repository.
