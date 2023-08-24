---
title: entries data file
---

{% assign radar_entries = site.data.tech-radar-entries | group_by: 'name'%}
{% assign sorted = radar_entries | sort:"date" | reverse %}
{% assign rings = site.data.rings %}
{% assign quadrants = site.data.quadrants %}

// Generated file DO NOT edit directly
const entries = [
  {% for entry in radar_entries %}
  {% assign last_entry = entry.items | sort:"date" | reverse %}
  {% assign quadrant = quadrants | where: "quadrant",  last_entry[0].quadrant %}
  {% assign ring = rings | where: "ring",  last_entry[0].ring %}
  {
        "quadrant": {{ quadrant[0].id }},
        "ring": {{ ring[0].id }},
        "label": "{{ last_entry[0].name }}",
        "link": "/{{ quadrant[0].quadrant | downcase | replace: " & ", "-and-" | replace: " ", "-" | url_encode }}/{{ last_entry[0].name | replace: " ", "-" | downcase | url_encode }}.html",
        "link_ext": "",
        "active": true,
      {% if last_entry[1] %}
        {% assign last_ring = rings | where: "ring",  last_entry[1].ring %}
        {% assign diff = ring[0].id | minus: last_ring[0].id %}
        {% if diff > 0  %}
          "moved": -1
        {% elsif diff < 0  %}
            "moved": 1
        {% else  %}
            "moved": 0
        {% endif %}        
       {% else %}
          "moved": 0
      {% endif %}        
      },
  {% endfor %} 

]
 