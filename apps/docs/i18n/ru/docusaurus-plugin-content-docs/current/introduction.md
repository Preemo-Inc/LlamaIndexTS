---
sidebar_position: 0
slug: /
---

# Что такое LlamaIndex.TS?

`Эта документация была автоматически переведена и может содержать ошибки. Не стесняйтесь открывать Pull Request для предложения изменений.`

LlamaIndex.TS - это фреймворк данных для приложений LLM, предназначенный для ввода, структурирования и доступа к частным или специфическим для домена данным. В то время как также доступен пакет на Python (см. [здесь](https://docs.llamaindex.ai/en/stable/)), LlamaIndex.TS предлагает основные функции в простом пакете, оптимизированном для использования с TypeScript.

## 🚀 Почему LlamaIndex.TS?

В основе своей LLM предлагают естественный языковой интерфейс между людьми и полученными данными. Широко доступные модели предварительно обучены на огромных объемах общедоступных данных, от Википедии и рассылок до учебников и исходного кода.

Приложения, построенные на основе LLM, часто требуют дополнения этих моделей частными или специфичными для домена данными. К сожалению, эти данные могут быть распределены по изолированным приложениям и хранилищам данных. Они находятся за API, в SQL-базах данных или заперты в PDF-файлах и презентациях.

Именно здесь и приходит на помощь **LlamaIndex.TS**.

## 🦙 Как может помочь LlamaIndex.TS?

LlamaIndex.TS предоставляет следующие инструменты:

- **Загрузка данных** - ввод ваших существующих данных в форматах `.txt`, `.pdf`, `.csv`, `.md` и `.docx` непосредственно.
- **Индексы данных** - структурирование ваших данных в промежуточные представления, которые легко и эффективно используются LLM.
- **Движки** - обеспечивают естественный языковой доступ к вашим данным. Например:
  - Движки запросов - мощные интерфейсы извлечения для вывода с увеличенным знанием.
  - Движки чата - разговорные интерфейсы для многосообщений и взаимодействий "туда и обратно" с вашими данными.

## 👨‍👩‍👧‍👦 Для кого предназначен LlamaIndex?

LlamaIndex.TS предоставляет основной набор инструментов, необходимых для создания приложений LLM с использованием JavaScript и TypeScript.

Наш API высокого уровня позволяет начинающим пользователям использовать LlamaIndex.TS для ввода и запроса их данных.

Для более сложных приложений наши API низкого уровня позволяют опытным пользователям настраивать и расширять любой модуль - коннекторы данных, индексы, извлекатели и поисковые движки, чтобы соответствовать их потребностям.

## Начало работы

`npm install llamaindex`

Наша документация включает [Инструкции по установке](./installation.md) и [Стартовое руководство](./starter.md) для создания вашего первого приложения.

Когда вы начнете работу, [Высокоуровневые концепции](./concepts.md) предоставляют обзор модульной архитектуры LlamaIndex. Для более практических примеров руководство [Полный цикл руководств](./end_to_end.md) будет полезно.

## 🗺️ Экосистема

Для загрузки или внесения вклада найдите LlamaIndex по следующим ссылкам:

- Github: https://github.com/run-llama/LlamaIndexTS
- NPM: https://www.npmjs.com/package/llamaindex

"

## Сообщество

Нужна помощь? Есть предложение по функционалу? Присоединяйтесь к сообществу LlamaIndex:

- Twitter: https://twitter.com/llama_index
- Discord: https://discord.gg/dGcwcsnxhU
