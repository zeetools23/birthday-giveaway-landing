document.addEventListener('DOMContentLoaded', function() {
  const dobIds = ['dob_d1','dob_d2','dob_m1','dob_m2','dob_y1','dob_y2'];
  const dobFields = dobIds.map(id => document.getElementById(id));
  const hiddenDob = document.getElementById('dob');

  function updateHiddenDob() {
    const vals = dobFields.map(f => f.value || '');
    if(vals.some(v => v)) {
      hiddenDob.value = `${vals[0]}${vals[1]}/${vals[2]}${vals[3]}/${vals[4]}${vals[5]}`;
    }
  }

  dobFields.forEach((field, index) => {
    field.addEventListener('input', function(e) {
      // allow only digits and max length 1
      this.value = this.value.replace(/\D/g, '').slice(0,1);
      if (this.value && index < dobFields.length - 1) {
        dobFields[index + 1].focus();
      }
      updateHiddenDob();
    });
    field.addEventListener('keydown', function(e) {
      if (e.key === 'Backspace' && !this.value && index > 0) {
        dobFields[index - 1].focus();
      }
    });
  });
});
