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
          "url": "https://raw.githubusercontent.com/edengriffithsuni/FIT3179/main/data/Carbon%20by%20Energy.csv"
        },
        "key": "Country",
        "fields": ["g/kwh (2019)"]
      }
    }//,
    //{"calculate": "datum.Active + 0.1", "as": "Active Cases"}
  ],
  "projection": {
    "type": "equirectangular"
  },
  "mark": {
    "type": "geoshape"
    },
  "encoding": {
    "color": {
      "field": "g/kwh (2019)",
      "type": "quantitative"
    },
    "tooltip": [
      {"field": "properties.NAME", "type": "nominal", "title": "Country"},
      {"field": "g/kwh (2019)", "type": "quantitative"}
    ]
  }

}
