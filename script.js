function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const itinerary = `
  Kerala Trip Itinerary

  Day 1:
  Ongole to Ernakulam train at 5:30 PM

  Day 2:
  - Sunrise at Varkala Beach
  - Jatayu Earth’s Center
  - Stay at Varkala

  Day 3:
  - Munnar Trip
  - Chocolate Factory
  - Tea Estate & Echo Point
  - Stay in Munnar

  Day 4:
  - Alleppey Houseboat
  - Sunset View
  - Stay in Alleppey

  Day 5:
  - Fort Kochi, Lulu Mall
  - Stay in Ernakulam

  Day 6:
  - Return to Ongole
  `;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Kerala Trip Itinerary", 20, 20);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(itinerary, 20, 30);
  doc.save("Kerala_Trip_Itinerary.pdf");
}
