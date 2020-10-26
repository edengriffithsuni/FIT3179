{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": "Are we getting better?",
  "width": 800,
  "height": 600,
  "data": {
    "url": "https://raw.githubusercontent.com/edengriffithsuni/FIT3179/main/data/BP%20data%20with%20CO2%20per%20KWh%20pivoted.csv"},
  "mark": "line",
  "encoding": {
    "x": {"field": "Year", "type": "temporal"},
    "y": {"field": "Australia", "title": "Australia: CO2/KWh", "type": "quantitative"}
  }
}
