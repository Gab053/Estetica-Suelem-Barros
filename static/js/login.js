$(document).ready(function() {
    $('.btn-cadastrar').click(function(e) {
        e.preventDefault();
        $(this).addClass('hidden');
        $('.input-cadastrar').removeClass('hidden');
        $('.btn-submit').appendTo('.input-cadastrar:last');

        var primeiroInput = $('.input-cadastrar:not(.hidden)').first();
            var topPosition = primeiroInput.offset().top;

            $('html, body').animate({
                scrollTop: topPosition
            }, 550);
    });


    function cpfMask(cpf) {
        return cpf.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    function mobilePhoneMask(phone) {
        return phone.replace(/\D/g, '')
            .replace(/^(\d)/, '($1')
            .replace(/^(\(\d{2})(\d)/, '$1) $2')
            .replace(/(\d{5})(\d{1,4})/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
    }

    function handleInput(input, mask) {
        $(input).val(mask(input.value));
    }

    $('.cpf').on('input', function (e) {
        handleInput(e.target, cpfMask);

        var cpf = e.target.value.replace(/\D/g, '');

        if (cpf.length === 11) {
            validateCPF(cpf);
        }
    });

    $('.tel').on('input', function (e) {
        handleInput(e.target, mobilePhoneMask);
    });


});