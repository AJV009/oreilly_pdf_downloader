var element = document.querySelectorAll('[role="document"]');
html2pdf().from(element[0]).save();