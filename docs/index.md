# PaPaDoc 帮助文档

- 记得向你需要的小伙伴分享 [帮助文档](https://docs.papawall.cc).

---

## [点击查看教程](./help/index.md)

<figure markdown="span">
  ![Image title](https://bbs.papawall.cc/assets/bg.jpg){ width="600" }
  <figcaption>图片测试</figcaption>
</figure>

:smile:
:fontawesome-brands-youtube:{ .youtube }

:octicons-heart-fill-24:{ .heart }

``` mermaid
sequenceDiagram
  autonumber
  Alice->>John: Hello John, how are you?
  loop Healthcheck
      John->>John: Fight against hypochondria
  end
  Note right of John: Rational thoughts!
  John-->>Alice: Great!
  John->>Bob: How about you?
  Bob-->>John: Jolly good!
```

``` mermaid
stateDiagram-v2
  state fork_state <<fork>>
    [*] --> fork_state
    fork_state --> State2
    fork_state --> State3

    state join_state <<join>>
    State2 --> join_state
    State3 --> join_state
    join_state --> State4
    State4 --> [*]
```

``` mermaid
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE-ITEM : contains
  LINE-ITEM {
    string name
    int pricePerUnit
  }
  CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
```