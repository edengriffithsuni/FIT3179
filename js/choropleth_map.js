{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "title": "CO2 produced for energy",
  "width": 800,
  "height": 600,
  "data": {
    "url": "https://raw.githubusercontent.com/KaneSec/vega_lite/main/3_choropleth_map/js/ne_110m_admin_0_countries.topojson",
    "format": {
          "type": "topojson",
          "feature": "ne_110m_admin_0_countries"
        }
  },
  "transform": [{
      "lookup": "properties.NAME",
      "from": {
        "data": {
          "url": "https://raw.githubusercontent.com/KaneSec/vega_lite/main/3_choropleth_map/data/covid_10_10_2020.csv"
        },
        "key": "Country",
        "fields": ["Active"]
      }
    },
    {"calculate": "datum.Active + 0.1", "as": "Active Cases"}
  ],
  "projection": {
    "type": "equirectangular"
  },
  "mark": {
    "type": "geoshape"
    },
  "encoding": {
    "color": {
      "field": "Active Cases",
      "type": "quantitative",
      "scale": {"type": "log"}
    },
    "tooltip": [
      {"field": "properties.NAME", "type": "nominal", "title": "Country"},
      {"field": "Active", "type": "quantitative"}
    ]
  }

}