const data = {
  status: {
    code: 10000,
    description: "Ok",
    req_id: "1b31836968a24a29bdf659e1ed0b7cc0",
  },
  outputs: [
    {
      id: "61312a2ee4654503bb20293695d02c56",
      status: {
        code: 10000,
        description: "Ok",
      },
      created_at: "2024-10-02T20:01:07.213348333Z",
      model: {
        id: "face-detection",
        name: "Face",
        created_at: "2020-11-25T16:50:24.453038Z",
        modified_at: "2024-08-26T12:35:04.615484Z",
        app_id: "main",
        model_version: {
          id: "6dc7e46bc9124c5c8824be4822abe105",
          created_at: "2021-03-04T17:40:26.081729Z",
          status: {
            code: 21100,
            description: "Model is trained and ready for deployment",
          },
          visibility: {
            gettable: 50,
          },
          app_id: "main",
          user_id: "clarifai",
          metadata: {},
        },
        user_id: "clarifai",
        model_type_id: "visual-detector",
        visibility: {
          gettable: 50,
        },
        toolkits: [],
        use_cases: [],
        languages: [],
        languages_full: [],
        check_consents: [],
        workflow_recommended: false,
        image: {
          url: "https://data.clarifai.com/large/users/clarifai/apps/main/input_owners/luv_2261/inputs/image/35c370253c0138cfd8e0ad6afe0f67d9",
          hosted: {
            prefix: "https://data.clarifai.com",
            suffix:
              "users/clarifai/apps/main/input_owners/luv_2261/inputs/image/35c370253c0138cfd8e0ad6afe0f67d9",
            sizes: ["small", "large"],
            crossorigin: "use-credentials",
          },
        },
      },
      input: {
        id: "fb35297509dc4ed5bac01d0250671316",
        data: {
          image: {
            url: "https://assets.gq.ru/photos/5d9f4029dc6f9700086910ae/master/w_1600%2Cc_limit/0.jpg",
            base64: "dHJ1ZQ==",
          },
        },
      },
      data: {
        regions: [
          {
            id: "ec149c476dcbce249bbf60234bb43865",
            region_info: {
              bounding_box: {
                top_row: 0.1469144,
                left_col: 0.37419882,
                bottom_row: 0.92803633,
                right_col: 0.7362362,
              },
            },
            data: {
              concepts: [
                {
                  id: "ai_b1b1b1b1",
                  name: "BINARY_POSITIVE",
                  value: 0.9999999,
                  app_id: "main",
                },
              ],
            },
            value: 0.9999999,
          },
        ],
      },
    },
  ],
  rawData: {
    status: {
      code: 10000,
      description: "Ok",
      req_id: "1b31836968a24a29bdf659e1ed0b7cc0",
    },
    outputs: [
      {
        id: "61312a2ee4654503bb20293695d02c56",
        status: {
          code: 10000,
          description: "Ok",
        },
        created_at: "2024-10-02T20:01:07.213348333Z",
        model: {
          id: "face-detection",
          name: "Face",
          created_at: "2020-11-25T16:50:24.453038Z",
          modified_at: "2024-08-26T12:35:04.615484Z",
          app_id: "main",
          model_version: {
            id: "6dc7e46bc9124c5c8824be4822abe105",
            created_at: "2021-03-04T17:40:26.081729Z",
            status: {
              code: 21100,
              description: "Model is trained and ready for deployment",
            },
            visibility: {
              gettable: 50,
            },
            app_id: "main",
            user_id: "clarifai",
            metadata: {},
          },
          user_id: "clarifai",
          model_type_id: "visual-detector",
          visibility: {
            gettable: 50,
          },
          toolkits: [],
          use_cases: [],
          languages: [],
          languages_full: [],
          check_consents: [],
          workflow_recommended: false,
          image: {
            url: "https://data.clarifai.com/large/users/clarifai/apps/main/input_owners/luv_2261/inputs/image/35c370253c0138cfd8e0ad6afe0f67d9",
            hosted: {
              prefix: "https://data.clarifai.com",
              suffix:
                "users/clarifai/apps/main/input_owners/luv_2261/inputs/image/35c370253c0138cfd8e0ad6afe0f67d9",
              sizes: ["small", "large"],
              crossorigin: "use-credentials",
            },
          },
        },
        input: {
          id: "fb35297509dc4ed5bac01d0250671316",
          data: {
            image: {
              url: "https://assets.gq.ru/photos/5d9f4029dc6f9700086910ae/master/w_1600%2Cc_limit/0.jpg",
              base64: "dHJ1ZQ==",
            },
          },
        },
        data: {
          regions: [
            {
              id: "ec149c476dcbce249bbf60234bb43865",
              region_info: {
                bounding_box: {
                  top_row: 0.1469144,
                  left_col: 0.37419882,
                  bottom_row: 0.92803633,
                  right_col: 0.7362362,
                },
              },
              data: {
                concepts: [
                  {
                    id: "ai_b1b1b1b1",
                    name: "BINARY_POSITIVE",
                    value: 0.9999999,
                    app_id: "main",
                  },
                ],
              },
              value: 0.9999999,
            },
          ],
        },
      },
    ],
  },
};
