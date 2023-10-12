
// احصل على العنصر select
const languageSelect = document.getElementById("language-select");

// استمع لتغيير القيمة في القائمة المنسدلة
languageSelect.addEventListener("change", function() {
    // قم بتحديد اللغة المختارة
    const selectedLanguage = languageSelect.value;

    // قم بتوجيه المستخدم إلى الصفحة المناسبة بناءً على اللغة المختارة
    if (selectedLanguage === "ar") {
        window.location.href = "index.html"; // توجيه إلى النسخة العربية
    } else if (selectedLanguage === "en") {
        window.location.href = "index-en.html"; // توجيه إلى النسخة الإنجليزية
    }
});

$(".btn").hover(function() {
    $(this).css("background-color", "#0056b3");
}, function() {
    $(this).css("background-color", "#007bff");
});

// احصل على العناصر الضرورية
var showFormButtonBasic = document.getElementById("show-subscription-form-button-basic");
var showFormButtonPremium = document.getElementById("show-subscription-form-button-premium");
var modal = document.getElementById("subscription-modal");
var closeModalButton = document.getElementById("close-modal-button");

// قم بإضافة مستمع للنقر على زر "اشترك بالخدمة" في البوكسين
showFormButtonBasic.addEventListener("click", function() {
    modal.style.display = "block"; // عند النقر، عرض النافذة المنفصلة
});

showFormButtonPremium.addEventListener("click", function() {
    modal.style.display = "block"; // عند النقر، عرض النافذة المنفصلة
});

// قم بإضافة مستمع للنقر على زر الإغلاق
closeModalButton.addEventListener("click", function() {
    modal.style.display = "none"; // عند النقر، أخفي النافذة المنفصلة
});

// قم بإضافة مستمع للنقر على خلفية النافذة للإغلاق أيضًا
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
// تعريف متغير serviceID كمتغير عالمي
const serviceID = "service_85bapog";

function sendMail() {
    var params = {
        name: document.getElementById("subscription-name").value,
        restaurant: document.getElementById("subscription-restaurant").value,
        mobile: document.getElementById("subscription-mobile").value,
        email: document.getElementById("subscription-email").value,
    };

    const templateID = "template_70gvl2k";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("subscription-name").value = "";
            document.getElementById("subscription-restaurant").value = "";
            document.getElementById("subscription-mobile").value = "";
            document.getElementById("subscription-email").value = "";
            console.log(res);
            swal("تم بنجاح", " تم إرسال البيانات بنجاح وسيتم التواصل معك قريبا.", "success");
        })
        .catch(err => {
            console.log(err);
            swal("خطأ", "حدث خطأ أثناء إرسال البيانات.", "error");
        });
}

document.getElementById("subscription-form").addEventListener("submit", function (e) {
    e.preventDefault(); // منع النموذج من الإرسال التقليدي
    sendMail(); // استدعاء الوظيفة لإرسال البريد الإلكتروني
    return false;
});

function sendContactMessage() {
    var param = {
        contact_name: document.getElementById("contact_name").value,
        contact_email: document.getElementById("contact_email").value,
        contact_message: document.getElementById("contact_message").value,
    };

    const contactTemplateID = "template_jypu9cq";

    emailjs.send(serviceID, contactTemplateID, param)
        .then(res => {
            document.getElementById("contact_name").value = "";
            document.getElementById("contact_email").value = "";
            document.getElementById("contact_message").value = "";
            console.log(res);
            swal("تم بنجاح", "تم إرسال البيانات بنجاح.", "success");
        })
        .catch(err => {
            console.log(err);
            swal("خطأ", "حدث خطأ أثناء إرسال البيانات.", "error");
        });
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // منع النموذج من الإرسال التقليدي
    sendContactMessage(); // استدعاء الوظيفة لإرسال البريد الإلكتروني للاتصال
    return false;
});



