import React, { useState } from "react";

// NPM
import { useMediaQuery } from "@mui/material";

//Styles Main
import {
  PrivacyPage,
  PrivacyCont,
  Cont,
  TitlePagePrivacy,
  Paragraph,
  Text,
} from "./Privacy.styled";

const Privacy = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );
  const isNotebook = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <PrivacyPage
      Desktop={isDesktop}
      Notebook={isNotebook}
      Tablet={isTablet}
      Mobile={isMobile}
    >
      <PrivacyCont>
        <TitlePagePrivacy>Политика конфиденциальности</TitlePagePrivacy>

        <Cont>
          <Text>
            Настоящая Политика конфиденциальности персональных данных (далее –
            Политика конфиденциальности) действует в отношении всей информации,
            которую наша компания, может получить о Пользователе во время
            использования нашего сайта.
          </Text>
        </Cont>

        {/* 1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ */}
        <Cont>
          <Paragraph>1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</Paragraph>
          <Text>
            1.1 В настоящей Политике конфиденциальности используются следующие
            термины: 1.1.1. «Администрация сайта (далее – Администрация сайта) »
            – уполномоченные сотрудники на управления сайтом, действующие от
            имени нашей организации, которые организуют и (или) осуществляет
            обработку персональных данных, а также определяют цели обработки
            персональных данных, состав персональных данных, подлежащих
            обработке, действия (операции), совершаемые с персональными данными.
            1.1.2. «Персональные данные» — любая информация, относящаяся к прямо
            или косвенно определенному или определяемому физическому лицу
            (субъекту персональных данных). 1.1.3. «Обработка персональных
            данных» — любое действие (операция) или совокупность действий
            (операций), совершаемых с использованием средств автоматизации или
            без использования таких средств с персональными данными, включая
            сбор, запись, систематизацию, накопление, хранение, уточнение
            (обновление, изменение), извлечение, использование, передачу
            (распространение, предоставление, доступ), обезличивание,
            блокирование, удаление, уничтожение персональных данных. 1.1.4.
            «Конфиденциальность персональных данных» — обязательное для
            соблюдения Оператором или иным получившим доступ к персональным
            данным лицом требование не допускать их распространения без согласия
            субъекта персональных данных или наличия иного законного основания.
            1.1.5. «Пользователь сайта акбмастер102,рф и всех его поддоменов
            (далее Пользователь)» – лицо, имеющее доступ к Сайту, посредством
            сети Интернет и использующее Сайт интернет-магазина. 1.1.6.
            «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и
            хранимый на компьютере пользователя, который веб-клиент или
            веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе при
            попытке открыть страницу соответствующего сайта. 1.1.7. «IP-адрес» —
            уникальный сетевой адрес узла в компьютерной сети, построенной по
            протоколу IP.
          </Text>
        </Cont>

        {/* 2. ОБЩИЕ ПОЛОЖЕНИЯ */}
        <Cont>
          <Paragraph>2. ОБЩИЕ ПОЛОЖЕНИЯ</Paragraph>
          <Text>
            2.1. Использование Пользователем сайта означает согласие с настоящей
            Политикой конфиденциальности и условиями обработки персональных
            данных Пользователя. 2.2. В случае несогласия с условиями Политики
            конфиденциальности Пользователь должен прекратить использование
            сайта. 2.3.Настоящая Политика конфиденциальности применяется только
            к данному сайту. Сайт не контролирует и не несет ответственность за
            сайты третьих лиц, на которые Пользователь может перейти по ссылкам,
            доступным на нашем сайте. 2.4. Администрация сайта не проверяет
            достоверность персональных данных, предоставляемых Пользователем
            сайта Интернет-магазина.
          </Text>
        </Cont>

        {/* 3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ */}
        <Cont>
          <Paragraph>3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ</Paragraph>
          <Text>
            3.1. Настоящая Политика конфиденциальности устанавливает
            обязательства Администрации сайта по неразглашению и обеспечению
            режима защиты конфиденциальности персональных данных, которые
            Пользователь предоставляет по запросу Администрации сайта при
            отправке форм на сайте для заказа услуги. 3.2. Персональные данные,
            разрешённые к обработке в рамках настоящей Политики
            конфиденциальности, предоставляются Пользователем путём заполнения
            регистрационной формы на сайте, при звонках на контактный номер
            компании, указанных на сайте акбмастер102,рф и включают в себя
            следующую информацию: 3.2.1. Имя Пользователя; 3.2.2. Контактный
            телефон Пользователя; 3.2.3. адрес электронной почты (e-mail); 3.3.
            Сайт защищает Данные, которые автоматически передаются в процессе
            просмотра рекламных блоков и при посещении страниц, на которых
            установлен статистический скрипт системы («пиксель»): — IP адрес; —
            информация из cookies; — информация о браузере (или иной программе,
            которая осуществляет доступ к показу рекламы); — время доступа; —
            адрес страницы, на которой расположен рекламный блок; реферер (адрес
            предыдущей страницы). 3.3.1. Отключение cookies может повлечь
            невозможность доступа к частям сайта, требующим авторизации. 3.3.2.
            Сайт может осуществлять сбор статистики об IP-адресах своих
            посетителей. Данная информация используется с целью выявления и
            решения технических проблем, для контроля законности проводимых
            финансовых платежей. 3.4. Любая иная персональная информация не
            оговоренная выше (история покупок, используемые браузеры и
            операционные системы и т.д.) подлежит надежному хранению и
            нераспространению, за исключением случаев, предусмотренных в п.п.
            5.2. и 5.3. настоящей Политики конфиденциальности.
          </Text>
        </Cont>

        {/* 4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ */}
        <Cont>
          <Paragraph>
            4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ ПОЛЬЗОВАТЕЛЯ
          </Paragraph>
          <Text>
            4.1. Персональные данные Пользователя Администрация сайта может
            использовать в целях: 4.1.1. Идентификации Пользователя,
            зарегистрированного на сайте, для оформления заказа и (или)
            заключения Договора купли-продажи товара дистанционным способом с
            акбмастер102,рф. 4.1.2. Предоставления Пользователю доступа к
            персонализированным ресурсам Сайта. 4.1.3. Установления с
            Пользователем обратной связи, включая направление уведомлений,
            запросов, касающихся использования Сайта , оказания услуг, обработка
            запросов и заявок от Пользователя. 4.1.4. Определения места
            нахождения Пользователя для обеспечения безопасности, предотвращения
            мошенничества. 4.1.5. Подтверждения достоверности и полноты
            персональных данных, предоставленных Пользователем. 4.1.6. Создания
            учетной записи в CRM системе компании. 4.1.7. Уведомления
            Пользователя Сайта о состоянии Заказа по e-mail и SMS. 4.1.8.
            Обработки и получения платежей, подтверждения налога или налоговых
            льгот, оспаривания платежа Пользователем. 4.1.9. Предоставления
            Пользователю эффективной клиентской и технической поддержки при
            возникновении проблем связанных с использованием Сайта
            интернет-магазина. 4.1.10. Предоставления Пользователю обновлений
            продукции, специальных предложений, информации о ценах, новостной
            рассылки и иных сведений от имени сайта или от имени партнеров
            сайта. 4.1.11. Осуществления рекламной деятельности с согласия
            Пользователя. 4.1.12. Предоставления доступа Пользователю на сайты
            или сервисы партнеров сайта с целью получения продуктов, обновлений
            и услуг.
          </Text>
        </Cont>

        {/* 5. СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ */}
        <Cont>
          <Paragraph>
            5. СПОСОБЫ И СРОКИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ
          </Paragraph>
          <Text>
            5.1. Обработка персональных данных Пользователя осуществляется без
            ограничения срока, любым законным способом, в том числе в
            информационных системах персональных данных с использованием средств
            автоматизации или без использования таких средств. 5.2. Пользователь
            соглашается с тем, что Администрация сайта вправе передавать
            персональные данные третьим лицам, в частности, курьерским службам,
            организациями почтовой связи, операторам электросвязи, исключительно
            в целях выполнения заказа Пользователя, оформленного на данном Сайте
            , включая доставку Товара. 5.3. Персональные данные Пользователя
            могут быть переданы уполномоченным органам государственной власти
            Российской Федерации только по основаниям и в порядке, установленным
            законодательством Российской Федерации. 5.4. При утрате или
            разглашении персональных данных Администрация сайта информирует
            Пользователя об утрате или разглашении персональных данных. 5.5.
            Администрация сайта принимает необходимые организационные и
            технические меры для защиты персональной информации Пользователя от
            неправомерного или случайного доступа, уничтожения, изменения,
            блокирования, копирования, распространения, а также от иных
            неправомерных действий третьих лиц. 5.6. Администрация сайта
            совместно с Пользователем принимает все необходимые меры по
            предотвращению убытков или иных отрицательных последствий, вызванных
            утратой или разглашением персональных данных Пользователя.
          </Text>
        </Cont>

        {/* 6. ОБЯЗАТЕЛЬСТВА СТОРОН */}
        <Cont>
          <Paragraph>6. ОБЯЗАТЕЛЬСТВА СТОРОН</Paragraph>
          <Text>
            6.1. Пользователь обязан: 6.1.1. Предоставить информацию о
            персональных данных, необходимую для пользования Сайтом. 6.1.2.
            Обновить, дополнить предоставленную информацию о персональных данных
            в случае изменения данной информации. 6.2. Администрация сайта
            обязана: 6.2.1. Использовать полученную информацию исключительно для
            целей, указанных в п. 4 настоящей Политики конфиденциальности.
            6.2.2. Обеспечить хранение конфиденциальной информации в тайне, не
            разглашать без предварительного письменного разрешения Пользователя,
            а также не осуществлять продажу, обмен, опубликование, либо
            разглашение иными возможными способами переданных персональных
            данных Пользователя, за исключением п.п. 5.2. и 5.3. настоящей
            Политики Конфиденциальности. 6.2.3. Принимать меры предосторожности
            для защиты конфиденциальности персональных данных Пользователя
            согласно порядку, обычно используемого для защиты такого рода
            информации в существующем деловом обороте. 6.2.4. Осуществить
            блокирование персональных данных, относящихся к соответствующему
            Пользователю, с момента обращения или запроса Пользователя или его
            законного представителя либо уполномоченного органа по защите прав
            субъектов персональных данных на период проверки, в случае выявления
            недостоверных персональных данных или неправомерных действий.
          </Text>
        </Cont>

        {/* 7. ОТВЕТСТВЕННОСТЬ СТОРОН */}
        <Cont>
          <Paragraph>7. ОТВЕТСТВЕННОСТЬ СТОРОН</Paragraph>
          <Text>
            7.1. Администрация сайта, не исполнившая свои обязательства, не
            несёт ответственность за убытки, понесённые Пользователем в связи с
            неправомерным использованием персональных данных, в соответствии с
            законодательством Российской Федерации, за исключением случаев,
            предусмотренных п.п. 5.2., 5.3. и 7.2. настоящей Политики
            Конфиденциальности. 7.2. В случае утраты или разглашения
            Конфиденциальной информации Администрация сайта не несёт
            ответственность, если данная конфиденциальная информация: 7.2.1.
            Стала публичным достоянием до её утраты или разглашения. 7.2.2. Была
            получена от третьей стороны до момента её получения Администрацией
            сайта. 7.2.3. Была разглашена с согласия Пользователя.
          </Text>
        </Cont>

        {/* 8. РАЗРЕШЕНИЕ СПОРОВ */}
        <Cont>
          <Paragraph>8. РАЗРЕШЕНИЕ СПОРОВ</Paragraph>
          <Text>
            8.1. До обращения в суд с иском по спорам, возникающим из отношений
            между Пользователем сайта и Администрацией сайта, обязательным
            является предъявление претензии (письменного предложения о
            добровольном урегулировании спора). 8.2 .Получатель претензии в
            течение 30 календарных дней со дня получения претензии, письменно
            уведомляет заявителя претензии о результатах рассмотрения претензии.
            8.3. При не достижении соглашения спор будет передан на рассмотрение
            в судебный орган в соответствии с действующим законодательством
            Российской Федерации. 8.4. К настоящей Политике конфиденциальности и
            отношениям между Пользователем и Администрацией сайта применяется
            действующее законодательство Российской Федерации.
          </Text>
        </Cont>

        {/* 9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ */}
        <Cont>
          <Paragraph>9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ</Paragraph>
          <Text>
            9.1. Администрация сайта вправе вносить изменения в настоящую
            Политику конфиденциальности без согласия Пользователя. 9.2. Новая
            Политика конфиденциальности вступает в силу с момента ее размещения
            на Сайте, если иное не предусмотрено новой редакцией Политики
            конфиденциальности. 9.3. Все предложения или вопросы по настоящей
            Политике конфиденциальности следует сообщать через контакты
            Владельца сайта размещенные на данном сайте.
          </Text>
        </Cont>
        
        {/* Обновлено «25» июня 2020 г. */}
        <Cont>
          <Text>Обновлено «25» июня 2020 г.</Text>
        </Cont>
      </PrivacyCont>
    </PrivacyPage>
  );
};
export default Privacy;