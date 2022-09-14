$(document).on("change", "#tipo_cobranca", function(){
    var item = $(this).val()
    var form = document.forms.namedItem("formTipo").id

    switch (item) {
        case "hora":
            $(`#${form}`).html(
                '<div class="control-group" name="">'+
                  '<div class="controls">'+
                    '<input type="text" id="" placeholder="Código" required>'+
                  '</div>'+
                '</div>'+

                '<div class="control-group" name="">'+
                  '<div class="controls">'+
                    '<input type="text" id="" placeholder="Nome" required>'+
                  '</div>'+
                '</div>'+

                '<div class="control-group" name="">'+
                  '<div class="controls">'+
                    '<select name="" id="tipo_cobranca">'+
                      '<option hidden>Cobrança</option>'+
                      '<option value="hora">Hora</option>'+
                      '<option value="fixa">Fixa</option>'+
                    '</select>'+
                  '</div>'+
                '</div>'+

                '<div class="control-group" name="">'+
                    '<div class="controls">'+
                        '<input type="text" id="" placeholder="Valor 1ª Hora" required>'+
                    '</div>'+
                '</div>'+

                '<div class="control-group" name="">'+
                    '<div class="controls">'+
                        '<input type="text" id="" placeholder="Valor 2ª Hora" required>'+
                    '</div>'+
                '</div>'+

                '<div class="control-group" name="">'+
                    '<div class="controls">'+
                        '<input type="text" id="" placeholder="Valor 3ª Hora" required>'+
                    '</div>'+
                '</div>'+

                '<div class="control-group" name="">'+
                    '<div class="controls">'+
                        '<input type="text" id="" placeholder="Valor 4ª Hora" required>'+
                    '</div>'+
                '</div>'+

                '<div class="control-group" name="">'+
                    '<div class="controls">'+
                        '<input type="text" id="" placeholder="Valor 5ª Hora" required>'+
                    '</div>'+
                '</div>'+

                '<div class="control-group" name="">'+
                    '<div class="controls">'+
                        '<input type="text" id="" placeholder="Valor 6ª Hora" required>'+
                    '</div>'+
                '</div>'+

                '<div class="control-group" name="">'+
                    '<div class="controls">'+
                        '<input type="text" id="" placeholder="Valor Adicional" required>'+
                    '</div>'+
                '</div>'+

                '<div class="control-group" name="">'+
                  '<div class="controls">'+
                    '<select name="" id="excedentes">'+
                      '<option hidden>Excedente</option>'+
                      '<option value="hora">Hora</option>'+
                      '<option value="minuto">Minuto</option>'+
                    '</select>'+
                  '</div>'+
                '</div>'+

                '<div class="form-actions" name="">'+
                  '<div class="span8">'+
                    '<div class="span9">'+
                      '<button type="submit" class="button btn btn-primary" id="salvarFormPostIg">'+
                        '<span class="button__icon">'+
                          '<i class="fa-solid fa-floppy-disk"></i>'+
                        '</span>'+
                        '<span class="button__text2">Cadastrar</span>'+
                      '</button>'+
                      '<button type="reset" class="button btn btn-danger" id="limparFormPostIg">'+
                        '<span class="button__icon">'+
                          '<i class="fa-solid fa-xmark"></i>'+
                        '</span>'+
                        '<span class="button__text2">Limpar</span>'+
                      '</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'
            )
            break;

        case "fixa":
            $(`#${form}`).html(
              '<div class="control-group" name="">'+
                '<div class="controls">'+
                  '<input type="text" id="" placeholder="Código" required>'+
                '</div>'+
              '</div>'+

              '<div class="control-group" name="">'+
                '<div class="controls">'+
                  '<input type="text" id="" placeholder="Nome" required>'+
                '</div>'+
              '</div>'+

              '<div class="control-group" name="">'+
                '<div class="controls">'+
                  '<select name="" id="tipo_cobranca">'+
                    '<option hidden>Cobrança</option>'+
                    '<option value="hora">Hora</option>'+
                    '<option value="fixa">Fixa</option>'+
                  '</select>'+
                '</div>'+
              '</div>'+

              '<div class="control-group">'+
                '<div class="controls">'+
                    '<input type="text" id="" placeholder="Valor Hora" required>'+
                '</div>'+
              '</div>'+


              '<div class="control-group">'+
                '<div class="controls">'+
                    '<input type="text" id="" placeholder="Valor Adicional" required>'+
                '</div>'+
              '</div>'+

              '<div class="control-group" name="">'+
                '<div class="controls">'+
                  '<select name="" id="excedentes">'+
                    '<option hidden>Excedente</option>'+
                    '<option value="hora">Hora</option>'+
                    '<option value="minuto">Minuto</option>'+
                  '</select>'+
                '</div>'+
              '</div>'+

              '<div class="form-actions" name="">'+
                '<div class="span8">'+
                  '<div class="span9">'+
                    '<button type="submit" class="button btn btn-primary" id="salvarFormPostIg">'+
                      '<span class="button__icon">'+
                        '<i class="fa-solid fa-floppy-disk"></i>'+
                      '</span>'+
                      '<span class="button__text2">Cadastrar</span>'+
                    '</button>'+
                    '<button type="reset" class="button btn btn-danger" id="limparFormPostIg">'+
                      '<span class="button__icon">'+
                        '<i class="fa-solid fa-xmark"></i>'+
                      '</span>'+
                      '<span class="button__text2">Limpar</span>'+
                    '</button>'+
                  '</div>'+
                '</div>'+
              '</div>'
            )
            break
    
        default:
            break;
    }
})
